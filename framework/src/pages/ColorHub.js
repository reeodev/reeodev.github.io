import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';
import { CirclePicker, SketchPicker } from 'react-color';

import { getStoreObject, setObject, pushObject } from "../components/colorHub/utilis/betterLocalStore"

import ColorDisplay from '../components/colorHub/comp/ColorDisplay';
import SearchBox from '../components/colorHub/comp/SearchBox';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import axios from "axios"
import colorArrDefault from "../components/colorHub/data/colorData.json"

function ColorHub() {
    const [ colorArr, setcolorArr ] = useState([]); // display color array
    const [ initLoading, setInitLoading ] = useState(true);// page first loading
    const [ pickedcolorArr, setPickedcolorArr ] = useState([]);// color picker bottom color display history
    const [ currPickcolor, setCurrPickcolor ] = useState("#000000"); // color picker top value changer
    const [ searchString, setSearchString ] = useState(""); // input box searching string
    
    useEffect( () => {

        ( async () =>{

            let storeData = getStoreObject("pickedColorArr") || [];

            if(storeData.length >= 1){
                setPickedcolorArr(Array.from(new Set(storeData)));
            }

            try{
                let colorData = await axios("https://cdn.jsdelivr.net/gh/reeodev/reeodev.github.io/framework/src/components/colorHub/data/colorData.json")
                setcolorArr(colorData.data);
            }
            catch(err){
                setcolorArr(colorArrDefault);
            }

            setInitLoading(false);

        })()

    },[])

    useEffect( () => {

        if(initLoading){
            return;
        }

        if(pickedcolorArr.length >= 1){
            pushObject("pickedColorArr", pickedcolorArr[pickedcolorArr.length - 1], true);
        }
        else{
            setObject("pickedColorArr", [], true);
        }
            
    },[pickedcolorArr])

    useEffect( () => {
        const finalArr = colorArrDefault.filter( (v) => v.title.toLowerCase().includes(searchString.toLowerCase()) )
        setcolorArr(finalArr);
    },[searchString])

    function addPickedColorArr(content){
        if(pickedcolorArr.indexOf(content) === -1){
            setPickedcolorArr([...pickedcolorArr, content]);
        }
    }

    return (
        <Layout>
        <Container maxWidth="xl">

            <br/>
            <h1>Great color combinations</h1>
            <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"3px"}}></div>

            <SearchBox setString={setSearchString}/>

                <Grid container spacing={2}>

                    <Grid item md={8}>

                        <Grid container spacing={2} order={{ xs: 2, lg: 1, xl: 1 }}>
                            <>
                            {initLoading && <CircularProgress />}
                            {colorArr.map( (v,i) => (
                                <Grid item md={6} mt={2} key={"c" + i}>
                                <h3 style={{ color: "#626262" }}>{v.title}</h3>
                                <div style={{ backgroundColor:"#C4C4C4", padding:"1rem", borderRadius:"0.5rem" }}>
                                    <ColorDisplay colorArr={v.colorArr} insideText={""} setPickedcolorArr={addPickedColorArr}/>
                                </div>
                                </Grid>
                            ))}
                            </>
                        </Grid>
                    </Grid>

                    <Grid item md={4} order={{ xs: 1, lg: 2, xl: 2 }}>
                        <Box sx={{ display: "flex", justifyContent:"right", marginTop:"1rem"}}>
                        <SketchPicker
                            width={"100%"}
                            color={currPickcolor} 
                            onChange={ (color) => setCurrPickcolor(color.hex) }
                            presetColors={pickedcolorArr}
                        />
                        </Box>
                        <Box sx={{ backgroundColor:"#C4C4C4", padding:"1rem", borderRadius:"0.5rem", marginTop:"1rem" }}>
                            <ColorDisplay colorArr={pickedcolorArr} insideText={"Copy value"} setPickedcolorArr={addPickedColorArr}/>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent:"right", marginTop:"1rem"}}>
                            <Button variant="contained" onClick={ () => setPickedcolorArr([]) } >Clear history</Button>
                        </Box>
                    </Grid>
                        
                </Grid>

                <br/>

        </Container>
        </Layout>
    );
}

export default ColorHub