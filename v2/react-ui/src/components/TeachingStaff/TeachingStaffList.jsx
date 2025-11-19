import React,{useState} from "react";
import axios from "axios";

function TeachingSatffList () {
     const teachingStaffUrl = 'https://localhost:7097/api/TeachingStaff';
     const [TeachingStaff, setTeachingStaff] = useState([]);

     useEffect(() =>{
        listTeachingStaff ();
     },[]);

    const listTeachingStaff = async () => {
        const response = await axios.get(teachingStaffUrl);
        setTeachingStaff(response.data);
    };
    return (<>
     <h3>TeachingStaff List</h3>
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
export default TeachingSatffList;