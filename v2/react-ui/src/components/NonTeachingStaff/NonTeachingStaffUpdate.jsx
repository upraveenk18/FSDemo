import React,{useState} from "react";
import axios from "axios";

function NonTeachingStaffUpdate () {
  
      const nonteachingstaffUrl = 'https://localhost:7097/api/NonTeachingStaff';
  
      const [NonTeachingStaffId,setNonTeachingStaffId] = useState(0);
      const [FirstName,setFirstName] = useState('');
      const [LastName,setLastName] = useState('');
      const [Qualification,setQualification] = useState('');
      const [Designation,setDesignation] = useState('');

       const handleNonTeachingSatffIdChange = (event) =>{
        setNonTeachingStaffId(event.target.value);
    } 
    const handleFirstNameChange =(event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange =(event) => {
        setLastName(event.target.value);
    }
    const handleQualificationChange =(event) => {
        setQualification(event.target.value);
    }
    const handleDesignationChange = (event) => {
        setDesignation(event.target.value);
    }

    
      
         const updateNonTeachingStaff = async (e) => {
            e.preventDefault();

            const nonteachingStaff = {
                NonTeachingStaffId:NonTeachingStaffId,
                FirstName: FirstName,
                LastName: LastName,
                Qualification:Qualification,
                Designation:Designation,
                
            };
            const response = await axios.put(nonteachingstaffUrl,nonteachingStaff);

            alert(response.status === 200?"nonteachingstaff updated Sucessfully!":"Error updating nonteachingstaff");
        };
    
    return (<>
      <h2>NonTeachingStaffUpdate</h2>
            <form>
                <label>NonTeachingStaffId (for Update/Delete):</label><br />
                <input type="text" id="NonTeachingStaffId" value={NonTeachingStaffId} onChange={handleNonTeachingSatffIdChange} /><br /><br />

                <label>First Name:</label><br />
                <input type="text" id="FirstName" value={FirstName} onChange={handleFirstNameChange} /><br /><br />

                <label>Last Name:</label><br />
                <input type="text" id="LastName" value={LastName} onChange={handleLastNameChange}/><br /><br />

                <label>Qualification:</label><br />
                <input type="text" id="Qualification" value={Qualification} onChange={handleQualificationChange}/><br /><br />

                <label>Designation:</label><br />
                <input type="text" id="Designation" value={Designation} onChange={handleDesignationChange}/><br /><br />

                <button type="submit" onClick={updateNonTeachingStaff}>(Put)</button>
            </form>
          
    </>)
}
export default NonTeachingStaffUpdate;