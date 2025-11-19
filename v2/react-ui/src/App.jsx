import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import StudentForm from './components/Student/StudentForm';
import StudentList from './components/Student/StudentList';
import TeachingStaff from './components/TeachingStaff/TeachingStaff';
import TeachingSatffList from './components/TeachingStaff/TeachingStaffList';
import TeachingStaffUpdate from './components/TeachingStaff/TeachingStaffUpdate';
import TeachingStaffPost from './components/TeachingStaff/TeachingStaffPost';
import TeachingStaffDelete from './components/TeachingStaff/TeachingStaffDelete';


function App() {
  const [count, setCount] = useState(0);

  
    const studentUrl = "https://localhost:7097/api/Student";

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); 

 
  useEffect(() => {
    getStudents();
  }, []);

   //for student list
    const getStudents = async () => {
        const response = await axios.get(studentUrl);
        setStudents(response.data); 
    };

   // Called when user clicks Edit in StudentList
  const handleEdit = (student) => {   
    setSelectedStudent(student);   
  };

  return (
    <>
      
      <h1>School Management System</h1>
      <StudentForm selectedStudent={selectedStudent} />

      <StudentList onEdit={handleEdit} />

      
      {/* <TeachingStaff/>
      <TeachingStaffUpdate/>
      <TeachingStaffPost/>
      <TeachingStaffDelete/> */}
    
      
    </>
  )
}

export default App
