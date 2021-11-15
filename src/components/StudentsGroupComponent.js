import React from 'react';
import {Grid} from "@mui/material";
import {SingleStudentComponent} from './SingleStudentComponent'

export const StudentGroupContainer = ({studentData}) => {

    return (
        <Grid spacing={1}  container >
            {studentData.map(student =>{
                return <SingleStudentComponent key={student.id} student={student}/>
            })}

        </Grid>
    )
}