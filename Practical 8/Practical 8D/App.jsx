import { useEffect, useState } from "react";
import axios from "axios";
function App() {
const [students, setStudents] = useState([]);
const [rollNo, setRollNo] = useState("");
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [marks, setMarks] = useState("");
// Get students
const getStudents = () => {axios.get("http://localhost:3000/students")
.then((response) => {setStudents(response.data);})
.catch((error) => {console.log(error);});
};
useEffect(() => {getStudents();}, []);

// Add student
const addStudent = () => {const newStudent = {
rollNo: Number(rollNo),
name: name,
course: course,
marks: Number(marks)
};
axios.post("http://localhost:3000/students", newStudent)
.then((response) => {alert(response.data.message);
setRollNo("");
setName("");
setCourse("");
setMarks("");
getStudents();
})
.catch((error) => {
console.log(error);
});
};
return (
<div>
<h1>Student Management System</h1>
<h2>Add Student</h2>
<input
type="number"
placeholder="Roll No"
value={rollNo}
onChange={(e) => setRollNo(e.target.value)}
/>
<br /><br />
<input
type="text"
placeholder="Student Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<br /><br />

<input
type="text"
placeholder="Course"
value={course}
onChange={(e) => setCourse(e.target.value)}
/>
<br /><br />
<input
type="number"
placeholder="Marks"
value={marks}
onChange={(e) => setMarks(e.target.value)}
/>
<br /><br />
<button onClick={addStudent}>
Add Student
</button>
<hr />
<h2>Student List</h2>
<table border="1">
<thead>
<tr>
<th>Roll No</th>
<th>Name</th>
<th>Course</th>
<th>Marks</th>
</tr>
</thead>
<tbody>
{students.map((student) => (
<tr key={student._id}>
<td>{student.rollNo}</td>
<td>{student.name}</td>
<td>{student.course}</td>
<td>{student.marks}</td>
</tr>
))}
</tbody>
</table>

</div>
);
}
export default App;
