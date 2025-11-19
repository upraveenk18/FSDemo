import React, {useState} from "react";
import axios from "axios";

function TeachingStaff() {

    const teachingStaffUrl = 'https://localhost:7097/api/TeachingStaff';

    const [TeachingStaffId, setTeachingStaffId] = useState(0);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Qualification, setQualification]=useState('');
    const [Designation, setDesignation]=useState('');
    const [TeachingStaff, setTeachingStaff] = useState([]);

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
     const updateTeachingStaff = async (e) => {
            e.preventDefault();

            const teachingStaff = {
                TeachingStaffId:TeachingStaffId,
                FirstName: FirstName,
                LastName: LastName,
                Qualification:Qualification,
                Designation:Designation,
                
            };
            const response = await axios.put(teachingStaffUrl,teachingStaff);

            alert(response.status === 200?"teachingStaff updated Sucessfully!":"Error updating teachingStaff");
        };
          const deleteteachingStaff = async (e) => {
      if (e) e.preventDefault();  
    const response = await axios.delete(teachingStaffUrl + "/" + TeachingStaffId);
    alert(response.status === 200 
    ? "TeachingStaff deleted successfully!" 
    : "Error delete teachingStaff");
    
  };
           
    const getTeachingStaff = async (e) => {
       e.preventDefault();  

    const response = await axios.get(teachingStaffUrl);
    setTeachingStaff(response.data);
    
    
   
  };


    return(<>
    <h2>TeachingSatff </h2>
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
                <button type="submit" onClick={updateTeachingStaff}>Update(Put)</button>
                <button type="submit" onClick={deleteteachingStaff}>Delete(Delete)</button>
                <button type="submit" onClick={getTeachingStaff}>getTeachingStaff(GET)</button>
                
                <h3>TeachingStaff List</h3>
            </form>
              <table 
            style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
  <thead>
    <tr>
      <th style={{ border: "1px " }}>TeachingStaffId</th>
      <th style={{ border: "1px solid black" }}>First Name</th>
      <th style={{ border: "1px solid black" }}>Last Name</th>
      <th style={{ border: "1px solid black"}}>Qualification</th>
      <th style={{ border: "1px solid black"}}>Qualification</th>
    </tr>
  </thead> 
  <tbody>         
            {TeachingStaff.map((T) => (
                <tr key={T.staffId} >
                    <td style={{ border: "1px solid black" }}>{T.staffId} </td> 
                    <td style={{ border: "1px solid black" }}>{T.firstName} </td>
                    <td style={{ border: "1px solid black" }}>{T.lastName}</td>
                    <td style={{ border: "1px solid black"}}>{T.qualification}</td> 
                    <td style={{ border: "1px solid black"}} >{T.designation}</td> 
                </tr>
            ))}
            </tbody>  
          </table>
    </>)
}
export default TeachingStaff;
