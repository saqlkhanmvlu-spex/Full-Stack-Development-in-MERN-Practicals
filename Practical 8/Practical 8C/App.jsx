import { useEffect, useState } from "react";
import axios from "axios";
function App() {
const [students, setStudents] = useState([]);
useEffect(() => { axios.get("http://localhost:3000/students")
.then((response) => {setStudents(response.data);})
.catch((error) => {console.log(error);}); }, []);
return (
<div>
<h1>Student List</h1>
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
