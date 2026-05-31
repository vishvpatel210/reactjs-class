import React from "react"; 
import StudentCard from "./StudentCard"

function StudentList({ students }) {
  return (
    <div>
     {students.map((student)=>(
        <StudentCard
        name = {student.name}
        age = {student.age}
        course = {student.course}
        city = {student.city}
         />
     ))}
    </div>
  );
}

export default StudentList;