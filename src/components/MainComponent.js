import React from 'react';
import {Container, Paper} from "@mui/material";
import {useStudentData} from '../hooks/useStudentsData'


export const MainComponent = () => {
    const studentData = useStudentData();
    return(
        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper sx={{width:"100%", height:"80vh",}}>
            {/*    grid group from api */}
            </Paper>
        </Container>
    )
}