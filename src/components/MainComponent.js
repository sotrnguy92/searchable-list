import React, {useEffect, useState} from 'react';
import {Container, Paper} from "@mui/material";
import {useStudentData} from '../hooks/useStudentsData'
import {StudentGroupContainer} from './StudentsGroupComponent'
import './MainComponent.css'
import TextField from '@mui/material/TextField';


export const MainComponent = () => {
    const studentData = useStudentData();

    const [searchArr, setSearchArr] = useState([]);
    useEffect(() =>{
        setSearchArr(studentData)
    },[studentData])

    const handleSearch = (event) => {
        const search = event.target.value;

        if(search){
            let filteredStudents = studentData.filter(student => student.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            setSearchArr(filteredStudents)
        }else{
            setSearchArr(studentData)
        }
    }

    return(
        <Container sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Paper className="student-paper" elevation={2} sx={{p:1,pl:0, pr:0, width:"100%", height:"80vh", flexGrow:1}}>
                <TextField  id="standard-basic" variant="standard" placeholder="Search by Name" onChange={handleSearch} />
                {searchArr.length > 0 && <StudentGroupContainer studentData={searchArr}/>}
            </Paper>
        </Container>
    )
}