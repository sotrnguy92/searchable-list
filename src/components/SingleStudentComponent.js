import React from 'react';
import {Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
import './SingleStudentComponent.css';


export const SingleStudentComponent = ({student}) => {
    let gradeSum =0;
    student.grades.forEach(grade => gradeSum += parseInt(grade))
    let average = gradeSum/student.grades.length;

    return (

        <Grid container item   sx={{borderBottom:'1px solid #E8E8E8', m:'auto'}} >
            <Grid item  >
                <img className={'avatar-img'} src={student.pic} alt={`${student.firstName}-avatar`}/>
            </Grid>
                <Grid item sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', ml:2}}>
                    <Typography>
                        <b> {student.firstName} {student.lastName}</b>
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Email: {student.email}
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Company: {student.company}
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Skill: {student.skill}
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Average: {average}%
                    </Typography>
                </Grid>
        </Grid>
    )
}