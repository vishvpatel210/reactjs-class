import React from "react";

function StudentCard({ name, age, course, city }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default StudentCard;