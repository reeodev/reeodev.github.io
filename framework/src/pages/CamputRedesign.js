import React from 'react';
// import Layout from '@theme/Layout';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { FaCrosshairs, FaHammer, FaLandmark, FaLock, FaHome, FaUserPlus } from "react-icons/fa";

const iconSize = 50
const dataArrJob = [
    { title: "Student Helper & Internship", icon: <FaCrosshairs size={iconSize}/> },
    { title: "Commencement Job ", icon: <FaHammer size={iconSize}/> },
    { title: "JobPlus Vacancies", icon: <FaLandmark size={iconSize}/> },
]

const dataArrStudent = [
    { title: "Locker", icon: <FaLock size={iconSize}/> },
    { title: "Residence", icon: <FaHome size={iconSize}/> },
    { title: "Student Volunteers", icon: <FaUserPlus size={iconSize}/> },
]

function SingleBox({ data, bgColor }){
    return (
        <Card sx={{ '&:hover':{ opacity: [0.8, 0.8, 0.7] }, width: 150, height: 150 , backgroundColor: bgColor , color:'white', display:'flex', alignItems:'center', justifyContent:"center" }} style={{ textAlign:"center" }}>
            <CardContent>
                { data.icon }
                <Typography Typography variant="subtitle1">
                    { data.title }
                </Typography>

            </CardContent>
        </Card>
    )
}

function RowList({ title, data, bgColor }){
    return (
        <>
        <h2>{ title }</h2> 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                { data.map ( v => (<Grid item md={3} xs={3}> <SingleBox data={v} bgColor={bgColor} />  </Grid>) ) }
            </Grid>
        </Box>
        </>
    )
}

export default function CamputRedesign() {
    return (
        <Container maxWidth="xg" style={{ marginTop: "30px" }}>
            <RowList title="Jobs related" data={dataArrJob} bgColor="#A50C5F"/> <br/>
            <RowList title="Student Services" data={dataArrStudent} bgColor="#6385C5"/><br/>     
        </Container>
    );
}