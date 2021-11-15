import React, {useState} from 'react';
import {Grid, IconButton} from "@mui/material";
import Typography from '@mui/material/Typography';
import './SingleStudentComponent.css';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {StudentGradesComponent} from './StudentGradesComponent'

export const SingleStudentComponent = ({student}) => {
    let gradeSum =0;
    student.grades.forEach(grade => gradeSum += parseInt(grade))
    let average = gradeSum/student.grades.length;

    const [seeDetails, setSeeDetails] = useState(false);

    return (

        <Grid container item   sx={{borderBottom:'1px solid #E8E8E8', position:'relative'}} >
            <Grid item  sx={{ml:2}}  >
                <img className={'avatar-img'} src={student.pic} alt={`${student.firstName}-avatar`}/>
            </Grid>
            <Grid item  sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', ml:4, mb:2}}>
                <Typography variant={'h3'} sx={{mb:0}}>
                    <b className={'student-name'}> {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</b>
                </Typography>

                <Typography className={'student-details'} sx={{pt:1}} component="div">
                    Email: {student.email}
                </Typography>
                <Typography className={'student-details'}  component="div">
                    Company: {student.company}
                </Typography>
                <Typography className={'student-details'}  component="div">
                    Skill: {student.skill}
                </Typography>
                <Typography className={'student-details'}  component="div">
                    Average: {average}%
                </Typography>
                {seeDetails && <StudentGradesComponent  grades={student.grades}/>}

            </Grid>
            <Grid item  sx={{ position:'absolute', right:20}} >
                <IconButton onClick={()=>setSeeDetails(!seeDetails)} >
                    {!seeDetails ? <RemoveRoundedIcon /> : <AddRoundedIcon/>}
                </IconButton>
            </Grid>

        </Grid>
    )
}