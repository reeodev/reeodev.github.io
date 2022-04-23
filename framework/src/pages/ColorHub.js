import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';
import { CirclePicker, SketchPicker } from 'react-color';

import { successCopySwal } from '../components/swalPopUtilis';
import { getStoreObject, setObject } from "../components/betterLocalStore"

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const colorArrDefault = [
    { title:"Blue mood", colorArr: ["#5389C0", "#8EC0F5", "#FFFFFF", "#E0BFCC" ], label:["game"] },
    { title:"Genki", colorArr: ["#FFFFFF", "#FA8072"], label:["web"] },
    { title:"Nayutan Style", colorArr: ["#FF5355", "#46CAF1", "#36C38B", "#454746"], label:["web"] },
]

function ColorHub() {
    const [ colorArr, SetcolorArr ] = useState(colorArrDefault); // display color array
    const [ initLoading, setInitLoading ] = useState(true);// page first loading
    const [ pickedcolorArr, SetPickedcolorArr ] = useState([]);// color picker bottom color display history
    const [ currPickcolor, SetCurrPickcolor ] = useState("#000000"); // color picker top value changer
    const [ searchString, SetSearchString ] = useState(""); // input box searching string

    useEffect( () => {

        if(initLoading){
            let storeData = getStoreObject("pickedColorArr") || [];
            SetPickedcolorArr(storeData);
            setInitLoading(false);
            return;
        }

        setObject("pickedColorArr", pickedcolorArr, true);

    },[pickedcolorArr])

    useEffect( () => {
        const finalArr = colorArrDefault.filter( (v) => v.title.toLowerCase().includes(searchString.toLowerCase()) )
        SetcolorArr(finalArr);
    },[searchString])

    function copyLeftColorToClipboard(content){
        navigator.clipboard.writeText(content);

        if(pickedcolorArr.indexOf(content) === -1){
            SetPickedcolorArr([...pickedcolorArr, content]);
        }

        successCopySwal(true);
    }

    return (
        <Layout>
        <Container maxWidth="xl">

            <br/>
            <h1>Great color combinations</h1>
            <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"3px"}}></div>
            <Input 
                startAdornment={ <InputAdornment position="start"> <SearchIcon /> </InputAdornment> }
                onChange={ (e) => SetSearchString(e.currentTarget.value) }
            />

                <Grid container spacing={2}>

                    <Grid item md={8}>
                        <Grid container spacing={2} order={{ xs: 2, lg: 1, xl: 1 }}>
                        {colorArr.map( (v,i) => (
                            <Grid item md={6} mt={2} key={"c" + i}>
                            <h3 style={{ color: "#626262" }}>{v.title}</h3>
                            <div style={{ backgroundColor:"#C4C4C4", padding:"1rem", borderRadius:"0.5rem" }}>
                            <CirclePicker
                                colors={v.colorArr} 
                                circleSize={48}
                                circleSpacing={16}
                                width={"300px"}
                                onChangeComplete={ (color) => {
                                    copyLeftColorToClipboard(color.hex);
                                }}
                            />
                            </div>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>

                    <Grid item md={4} order={{ xs: 1, lg: 2, xl: 2 }}>
                        <Box sx={{ display: "flex", justifyContent:"right", marginTop:"1rem"}}>
                        <SketchPicker
                            width={390}
                            color={ currPickcolor } 
                            onChange={ (color) => SetCurrPickcolor(color.hex) }
                            presetColors={pickedcolorArr}
                        />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent:"right", marginTop:"1rem"}}>
                            <Button variant="contained" onClick={ () => SetPickedcolorArr([]) } >Clear history</Button>
                        </Box>
                    </Grid>
                        
                </Grid>

                <br/>

        </Container>
        </Layout>
    );
}

export default ColorHub