import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { CirclePicker, SketchPicker } from 'react-color';
import { successCopySwal } from '../components/swalPopUtilis';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

const colorArrDefault = [
    { title:"Blue mood", colorArr: ["#5389C0", "#8EC0F5", "#FFFFFF", "#E0BFCC" ], label:["game"] },
    { title:"Genki", colorArr: ["#FFFFFF", "#FA8072"], label:["web"] },
    { title:"Nayutan Style", colorArr: ["#FF5355", "#46CAF1", "#36C38B", "#454746"], label:["web"] },
]

function ColorHub() {
    const [ colorArr, SetcolorArr ] = useState(colorArrDefault);
    const [ pickedcolorArr, SetPickedcolorArr ] = useState([]);
    const [ currPickcolor, SetCurrPickcolor ] = useState("#000000");

    function cpoyColorToClipboard(content){
        navigator.clipboard.writeText(content);

        if(pickedcolorArr.indexOf(content) === -1){
            SetPickedcolorArr([...pickedcolorArr, content]);
        }

        successCopySwal();

    }

    return (
        <Layout>
        <Container maxWidth="xl">

            <br/>
            <h1>Great color combinations</h1>
            <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"3px"}}></div>

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
                                    cpoyColorToClipboard(color.hex);
                                }}
                            />
                            </div>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>

                    <Grid item md={4} order={{ xs: 1, lg: 2, xl: 2 }}>
                        <SketchPicker
                            width={400}
                            color={ currPickcolor } 
                            onChange={ (color) => SetCurrPickcolor(color.hex) }
                            presetColors={pickedcolorArr}
                        />
                    </Grid>
                        
                </Grid>

                <br/><br/>

        </Container>
        </Layout>
    );
}

export default ColorHub