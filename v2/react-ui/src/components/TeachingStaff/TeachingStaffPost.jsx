import React, {useState} from "react";
import axios from "axios";

function TeachingStaffPost() {
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

            const handleSaveChange = async(e) =>{
            alert();
            e.preventDefault();
            const teachingStaff = {
            FirstName: FirstName,
            LastName: LastName,
            Qualification:Qualification,
            Designation:Designation,

            };

            const response = await axios.post(teachingStaffUrl, teachingStaff);
            console.log("Post TeachingStaff ==> ");
            console.log(response)
            alert(response.status ? "TeachingStaff saved successfully!" : "Error saving TeachingStaff");    

        };

    return (<>
    <h2>TeachingSatff Post </h2>
            <form>
                <label>TeachingStaff ID (for Update/Delete):</label><br />
                <input type="text" id="TeachingStaffId" value={TeachingStaffId} onChange={handleTeachingStaffIdChange} /><br /><br />

                <label>First Name:</label><br />
                <input type="text" id="FirstName" value={FirstName} onChange={handleFirstNameChange} /><br /><br />

                <label>Last Name:</label><br />
                <input type="text" id="LastName" value={LastName} onChange={handleLastNameChange}/><br /><br />

                <label>Qualification:</label><br />
                <input type="text" id="Qualification" value={Qualification} onChange={handleQualificationChange}/><br /><br />

                <label>Designation:</label><br />
                <input type="text" id="Designation" value={Designation} onChange={handleDesignationChange}/><br /><br />

                <button type="submit" onClick={handleSaveChange}>Save (POST)</button>
                </form>
    </>)
}
export default TeachingStaffPost;