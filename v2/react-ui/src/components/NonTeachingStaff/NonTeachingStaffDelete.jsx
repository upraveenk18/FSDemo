import React,{useState} from "react";
function NonTeachingStaffDelete() {

const nonteachingstaffUrl = 'https://localhost:7097/api/NonTeachingStaff';
const [NonTeachingStaff,setNonTeachingStaff] = useState([]);

 useEffect(() => {

        deletenonteachingStaff();
    },[]);

    
          const deletenonteachingStaff = async (e) => {
      if (e) e.preventDefault();  
    const response = await axios.delete(nonteachingstaffUrl + "/" + NonTeachingStaffId);
    alert(response.status === 200 
    ? "NonTeachingStaff deleted successfully!" 
    : "Error delete NonTeachingStaff");
    
  };


    return (<>
      <h3>Non TeachingStaff List</h3>
            <table id="ntstaff" 
            style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
  <thead>
    <tr>
      <th style={{ border: "1px " }}>NonTeachingStaffId</th>
      <th style={{ border: "1px solid black" }}>First Name</th>
      <th style={{ border: "1px solid black" }}>Last Name</th>
      <th style={{ border: "1px solid black"}}>Qualification</th>
      <th style={{ border: "1px solid black"}}>Designation</th>
    </tr>
  </thead> 
  <tbody>         
            {NonTeachingStaff.map((N) => (
                <tr key={N.nonStaffId} >
                    <td style={{ border: "1px solid black" }}>{N.nonStaffId} </td> 
                    <td style={{ border: "1px solid black" }}>{N.firstName} </td>
                    <td style={{ border: "1px solid black" }}>{N.lastName}</td>
                    <td style={{ border: "1px solid black"}}>{N.qualification}</td> 
                    <td style={{ border: "1px solid black"}} >{N.designation}</td> 
                </tr>
            ))}
            </tbody>  
          </table>
    
    </>);
}
export default NonTeachingStaffDelete;