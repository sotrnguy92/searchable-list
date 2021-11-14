import {useState, useEffect} from 'react';
import axios from 'axios';

export const useStudentData = () =>{
    const [studentData, setStudentData] = useState([])
    const url = "https://api.hatchways.io/assessment/students"

    useEffect(() =>{
        const studentData = async ()=> {
            const res = await axios.get(url);
            const data = res.data.students;
            setStudentData(data)
            console.log(data)
        }
        studentData();
    }, [url])

    return studentData;
}