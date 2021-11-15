import React from 'react';
import {Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
import './SingleStudentComponent.css';


export const SingleStudentComponent = () => {
    return (

        <Grid container item   sx={{borderBottom:'1px solid #E8E8E8', m:'auto'}} >
            <Grid Item  >
                <img className="avatar-img" src={'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg'}/>
            </Grid>
                <Grid item sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', ml:2}}>
                    <Typography>name</Typography>
                    <Typography  variant="subtitle1" component="div">
                        Standard license
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Name
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Name
                    </Typography>
                    <Typography  variant="subtitle1" component="div">
                        Name
                    </Typography>
                </Grid>
        </Grid>
    )
}