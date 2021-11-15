import React from 'react';
import {Container, Paper} from "@mui/material";
import {useStudentData} from '../hooks/useStudentsData'
import {StudentGroupContainer} from './StudentsGroupComponent'


export const MainComponent = () => {
    const studentData = useStudentData();
    return(
        <Container sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Paper  elevation={2} sx={{p:1,pr:0, width:"100%", height:"80vh", flexGrow:1}}>
                {studentData.length >0 && <StudentGroupContainer studentData={studentData}/>}
            </Paper>
        </Container>
    )
}