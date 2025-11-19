import React, {useState} from "react";
import axios from "axios";

function TeachingStaffDelete() {

        const teachingStaffUrl = 'https://localhost:7097/api/TeachingStaff';

        const [TeachingStaffId, setTeachingStaffId] = useState(0);
        const [FirstName, setFirstName] = useState('');
        const [LastName, setLastName] = useState('');
        const [Qualification, setQualification]=useState('');
        const [Designation, setDesignation]=useState('');
        

        const handleTeachingStaffIdChange =(event) => {
        setTeachingStaffId(event.target.value);
    }
        const handleFirstNameChange=(event) => {
        setFirstName(event.target.value);
    }
        const handleLastNameChange=(event) => {
        setLastName(event.target.value);
    }
        const handleQualificationChange=(event) =>{
        setQualification(event.target.value);
    }
        const handleDesignationChange=(event)=>{
        setDesignation(event.target.value);
    }

    
        const deleteteachingStaff = async (e) => {
        if (e) e.preventDefault();  
        const response = await axios.delete(teachingStaffUrl + "/" + TeachingStaffId);
        alert(response.status === 200 
        ? "TeachingStaff deleted successfully!" 
        : "Error delete teachingStaff");
        
    };
        
    return (<>
    <h2>TeachingSatff Delete </h2>
        <button type="submit" onClick={deleteteachingStaff}>Delete(Delete)</button>  
    </>)
}
export default TeachingStaffDelete;

