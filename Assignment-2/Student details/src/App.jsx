import StudentList from "./components/StudentList";

function App() {
  const students = [
    { name: "Jonty Patel", age: 19, course: "B.Tech", city: "Vadodara" },
    { name: "vishv patel", age: 19, course: "BBA", city: "unjha" },
    { name: "jal Gupta", age: 22, course: "MCA", city: "Mumbai" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;