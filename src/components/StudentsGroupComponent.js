import React from 'react';
import {Grid} from "@mui/material";
import {SingleStudentComponent} from './SingleStudentComponent'
import {borderColor} from "@mui/system";

export const StudentGroupContainer = (studentData) => {
    return (
        <Grid spacing={1}  container >
            <SingleStudentComponent/>
            <SingleStudentComponent/>
        </Grid>
    )
}