import React,{useState} from "react";
import axios from "axios";


function NonTeachingStaff() {

    const nonteachingstaffUrl = 'https://localhost:7097/api/NonTeachingStaff';

    const [NonTeachingStaffId,setNonTeachingStaffId] = useState(0);
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Qualification,setQualification] = useState('');
    const [Designation,setDesignation] = useState('');
    const [NonTeachingStaff,setNonTeachingStaff] = useState([]);

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

    
       const handleSaveChange = async(e) => {
            alert();
            e.preventDefault();
            const nonteachingstaff = {
            FirstName: FirstName,
            LastName: LastName,
            Qualification:Qualification,
            Designation:Designation,
            
            };

            const response = await axios.post(nonteachingstaffUrl, nonteachingstaff);
            console.log("Post NonTeachingStaff ==> ");
            console.log(response)
            alert("API Status ==> " + response.status);      
        };
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
          const deletenonteachingStaff = async (e) => {
      if (e) e.preventDefault();  
    const response = await axios.delete(nonteachingstaffUrl + "/" + NonTeachingStaffId);
    alert(response.status === 200 
    ? "NonTeachingStaff deleted successfully!" 
    : "Error delete NonTeachingStaff");
    
  };
           
    const getnonTeachingStaff = async (e) => {
       e.preventDefault();  

    const response = await axios.get(nonteachingstaffUrl);
    setNonTeachingStaff(response.data);
    
    
   
  };

    

    return (<>
          <h2>NonTeachingStaff</h2>
            <form>
                <label>NonStaffId (for Update/Delete):</label><br />
                <input type="text" id="NonTeachingStaffId" value={NonTeachingStaffId} onChange={handleNonTeachingSatffIdChange} /><br /><br />

                <label>First Name:</label><br />
                <input type="text" id="FirstName" value={FirstName} onChange={handleFirstNameChange} /><br /><br />

                <label>Last Name:</label><br />
                <input type="text" id="LastName" value={LastName} onChange={handleLastNameChange}/><br /><br />

                <label>Qualification:</label><br />
                <input type="text" id="Qualification" value={Qualification} onChange={handleQualificationChange}/><br /><br />

                <label>Designation:</label><br />
                <input type="text" id="Designation" value={Designation} onChange={handleDesignationChange}/><br /><br />

                <button type="submit" onClick={handleSaveChange}>Save (POST)</button>
                <button type="submit" onClick={updateNonTeachingStaff}>(Put)</button>
                <button type="submit" onClick={deletenonteachingStaff}>Delete(Delete)</button>
                <button type="submit" onClick={getnonTeachingStaff}>getnonTeachingStaff(GET)</button>
                
              
            </form>

            
              <table 
            style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
  <thead>
    <tr>
      <th style={{ border: "1px " }}>NonTeachingStaffId</th>
      <th style={{ border: "1px solid black" }}>First Name</th>
      <th style={{ border: "1px solid black" }}>Last Name</th>
      <th style={{ border: "1px solid black"}}>Qualification</th>
      <th style={{ border: "1px solid black"}}>Qualification</th>
    </tr>
  </thead> 
  <tbody>         
            {NonTeachingStaff.map((T) => (
                <tr key={T.staffId} >
                    <td style={{ border: "1px solid black" }}>{T.NonTeachingStaffId} </td> 
                    <td style={{ border: "1px solid black" }}>{T.firstName} </td>
                    <td style={{ border: "1px solid black" }}>{T.lastName}</td>
                    <td style={{ border: "1px solid black"}}>{T.qualification}</td> 
                    <td style={{ border: "1px solid black"}} >{T.designation}</td> 
                </tr>
            ))}
            </tbody>  
          </table>
    </>);
}

export default NonTeachingStaff;