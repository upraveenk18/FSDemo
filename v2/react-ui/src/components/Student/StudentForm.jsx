import React, {useEffect, useState} from "react";
import axios from "axios";

function StudentForm({selectedStudent = null}){

    const studentUrl = "https://localhost:7097/api/Student";

    
    const blank = {
      studentId: 0,
      firstName: "",
      lastName: "",
      standard: "",
      phoneNumber: "",
      address: "",
    };

    const [student, setStudent] = useState(blank);

    useEffect(()=>{
      if(selectedStudent){
        setStudent(selectedStudent);
      } else {
      setStudent(blank);
    }
    },[selectedStudent]);

    const handleChange = (event) =>{
      console.log("handleChange ==> ");
      console.log(event.target);

      const {name, value} = event.target;
      setStudent({...student, [name] : value});
    };

    const saveStudent = async(e) => {
        e.preventDefault();  
     
      const response = await axios.post(studentUrl, student);
      alert(response.status === 200 
              ? "Student posted successfully!" 
                : "Error post student");
    };
         
    const updateStudent = async(e) =>{
      e.preventDefault();  
     
      const response = await axios.put(studentUrl, student);
      alert(response.status === 200 
              ? "Student updated successfully!" 
                : "Error put student");
    };

    return (<>
        <h2>Student Registration Form</h2>
        
    <form >
      <label >student Id (for Update/Delete):</label><br />
      <input type="text" id="studentId" name="studentId" value={student.studentId}  onChange={handleChange} /><br />

      <label>First Name:</label><br />
      <input type="text" id="firstName" name="firstName" value={student.firstName} onChange={handleChange}/><br />

      <label>Last Name:</label><br />
      <input type="text" id="lastName" name="lastName" value={student.lastName}  onChange={handleChange}/><br />

      <label>Standard:</label><br />
      <input type="text" id="standard" name="standard" value={student.standard}  onChange={handleChange}/><br />

      <label>Phone Number:</label><br />
      <input type="text" id="phoneNumber" name="phoneNumber" value={student.phoneNumber}  onChange={handleChange} /><br /><br />

      <label>Address:</label><br />
      <textarea id="address" name="address" value={student.address}  onChange={handleChange} ></textarea><br />

        <button type="button" onClick={saveStudent}>Save (POST)</button>
          <button type="button" onClick={updateStudent}>Update (PUT)</button>
          {/* <button type="button" onClick={deleteStudent}>Delete (DELETE)</button> */}
          {/* <button type="button" onClick={getStudents}>Get Students (GET)</button> */}
    </form>
    </>);
}
export default StudentForm;
