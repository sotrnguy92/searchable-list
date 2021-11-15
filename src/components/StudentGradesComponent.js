import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


export const StudentGradesComponent = ({grades}) => {

    return (
        <Grid container item sx={{mt:2,display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography className={'student-details'}  component="div">
                <b>Grades</b>
            </Typography>
            {grades.map((grade, index) =>{
                return (
                    <Typography className={'student-details'}  component="div">
                        Test {index+1}<b>:</b> {grade}
                    </Typography>
                )
            })}
        </Grid>
    )

}