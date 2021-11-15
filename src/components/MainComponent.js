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

    const handleNameSearch = (event) => {
        const tagQuery = document.getElementById('tag-search').value
        const nameQuery = event.target.value;

        filterStudents(nameQuery, tagQuery);
    }


    const handleTagSearch = (event) => {
        const tagQuery = event.target.value
        const nameQuery = document.getElementById('name-search').value
        filterStudents(nameQuery, tagQuery);
    }

    const filterStudents = (name, tag) => {
        let filteredArr = studentData;

        if(name.length>0){
            filteredArr = filteredArr.filter(student => (student.firstName + ' ' + student.lastName).toLowerCase().indexOf(name.toLowerCase()) !== -1)

        }
        if(tag.length>0){
            filteredArr = filteredArr.filter(student => {
                if(student.tags){
                    if( (student.tags.join(' ')).toLowerCase().indexOf(tag.toLowerCase()) !== -1){
                        return true
                    }
                }
                return false
            })
        }
        setSearchArr(filteredArr)

    }

    const handleAddTag = (event ) => {
        if(event.key === 'Enter' && event.target.value){

            let studentInfo = studentData.find(({id})=> id === event.target.id)
            let indexOfStudent;
                studentData.find(({id}, index)=>{
                if(id === event.target.id){
                    indexOfStudent= index;
                    return true;
                }
                return false;
            })
            if(studentInfo.tags){
                studentInfo.tags.push(event.target.value)
            }else{
                studentInfo['tags']=[event.target.value]
            }
            event.target.value = '';

            const updatedSearchArr = [...searchArr]
            updatedSearchArr[indexOfStudent] = studentInfo
            setSearchArr(updatedSearchArr)
        }

    }

    return(
        <Container sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Paper className="student-paper" elevation={2} sx={{p:1,pl:0, pr:0, width:"100%", height:"80vh", flexGrow:1}}>
                <TextField  id="name-search" variant="standard" placeholder="Search by Name" onChange={handleNameSearch} />
                <TextField  id="tag-search" variant="standard" placeholder="Search by Tag" onChange={handleTagSearch} />
                {searchArr.length > 0 && <StudentGroupContainer studentData={searchArr} handleAddTag={handleAddTag} />}
            </Paper>
        </Container>
    )
}