import React from 'react';
import {Grid} from "@mui/material";
import {SingleStudentComponent} from './SingleStudentComponent'

export const StudentGroupContainer = ({studentData, handleAddTag}) => {

    return (
        <Grid spacing={1}  container >
            {studentData.map(student =>{
                return <SingleStudentComponent key={student.id} student={student} handleAddTag={handleAddTag} />
            })}

        </Grid>
    )
}