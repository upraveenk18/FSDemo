import React,{useState, useEffect} from "react";
import axios from "axios";

function StudentList({ onEdit }){

    const studentUrl = "https://localhost:7097/api/Student";
    const [students, setStudents] = useState([]);
    
    const getStudents = async () => {
        const response = await axios.get(studentUrl);
        setStudents(response.data); 
    };

    
    useEffect(() => {
        getStudents();
    },[studentUrl]);

   


    return (<>
    <h3>Student List</h3>
        <table 
            style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px " }}>Id</th>
                        <th style={{ border: "1px solid black" }}>First Name</th>
                        <th style={{ border: "1px solid black" }}>Last Name</th>
                        <th style={{ border: "1px solid black"}}>Standard</th>
                        <th style={{ border: "1px solid black"}}>Phone Number</th>
                        <th style={{ border: "1px solid black" }}>Address</th>
                        <th style={{ border: "1px solid black" }}>Actions</th>
                    </tr>
                </thead> 
                <tbody>
                    {students.map((s) => (
                        <tr key={s.studentId}>
                            <td style={{ border: "1px solid black" }}>{s.studentId} </td> 
                            <td style={{ border: "1px solid black" }}>{s.firstName} </td>
                            <td style={{ border: "1px solid black" }}>{s.lastName}</td>
                            <td style={{ border: "1px solid black"}}>{s.standard}</td> 
                            <td style={{ border: "1px solid black"}} >{s.phoneNumber}</td> 
                            <td style={{ border: "1px solid black" }}>{s.address}</td>   
                            <td style={{ border: "1px solid black" }}> 
                                <a href="#" onClick={ (e) => {
                                        e.preventDefault();
                                        onEdit(s);
                                    }} >edit</a>
                            </td>
                        </tr>
            ))}
            </tbody>  
          </table>        

    </>);
}

export default StudentList;