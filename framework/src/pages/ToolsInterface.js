import React from 'react';
import Layout from '@theme/Layout';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import '../css/mypage.css'

function SingleCard({ data }){
    return (
        <Card sx={{ minWidth: 275 }}>

            <CardContent>

                <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                    { data.title }
                </Typography>

                <Typography Typography variant="body2">
                    {data.subTitle}
                </Typography>

            </CardContent>

            <CardActions >
                <Button size="small" onClick={ (e) => window.location.href=data.link }>Learn More</Button>
            </CardActions>
        </Card>
    )
}

const dataArr = [
    { title: "Design hub", subTitle: "Collections tools wow.", link: "/"}
]

export default function ToolsInterface() {

    return (
        <Layout>
            {/* <h1 className={ `test ${toggle ? 'active':''}` } onClick={() => setToggle( !toggle )}>My React page</h1> <p>This is a React page</p> */}
            <Container maxWidth="lg" style={{ marginTop: "30px" }}>
            <h1>Tools</h1> 

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item md={6} xs={12}>
                        <SingleCard data={dataArr[0]}/>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <SingleCard data={dataArr[0]}/>
                    </Grid>

                </Grid>
            </Box>
            </Container>

        </Layout>
    );
}