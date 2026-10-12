import { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:3000/students";
function App() {
const [students, setStudents] = useState([]);
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [marks, setMarks] = useState("");
const [editId, setEditId] = useState(null);
const [error, setError] = useState("");
// Get student records
const getStudents = async () => {
try {
const response = await axios.get(API);
setStudents(response.data);

setError("");
} catch (err) {
setError("Unable to load students. Check the backend.");
}
};
useEffect(() => {
getStudents();
}, []);
// Clear form
const clearForm = () => {
setName("");
setCourse("");
setMarks("");
setEditId(null);
setError("");
};
// Add or update student
const saveStudent = async (e) => {
e.preventDefault();
setError("");
// Validation 1: Empty fields
if (!name.trim() || !course.trim() || marks === "") {
setError("Please fill in all fields.");
return;
}
// Validation 2: Marks must be between 0 and 100
if (
!Number.isFinite(Number(marks)) ||
Number(marks) < 0 ||
Number(marks) > 100
) {
setError("Marks must be between 0 and 100.");
return;
}

const student = {
name: name.trim(),
course: course.trim(),
marks: Number(marks)
};
try {
let response;
if (editId) {
response = await axios.put(`${API}/${editId}`, student);
} else {
response = await axios.post(API, student);
}
alert(response.data.message);
clearForm();
await getStudents();
} catch (err) {
setError(
err.response?.data?.message || "Unable to save student."
);
}
};
// Load details for editing
const editStudent = (student) => {
setEditId(student._id);
setName(student.name);
setCourse(student.course);
setMarks(String(student.marks));
setError("");
};
// Delete student
const deleteStudent = async (id) => {
if (!window.confirm("Do you want to delete this student?")) {
return;
}

try {
const response = await axios.delete(`${API}/${id}`);
alert(response.data.message);
if (editId === id) {
clearForm();
}
await getStudents();
} catch (err) {
setError(
err.response?.data?.message || "Unable to delete student."
);
}
};
return (
<div>
<h1>Student Management System</h1>
<h2>{editId ? "Update Student" : "Add Student"}</h2>
<form onSubmit={saveStudent}>
<input
type="text"
placeholder="Student Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
type="text"
placeholder="Course"
value={course}
onChange={(e) => setCourse(e.target.value)}
/>
<input
type="number"
placeholder="Marks (0-100)"

min="0"
max="100"
step="any"
value={marks}
onChange={(e) => setMarks(e.target.value)}
/>
<button type="submit">
{editId ? "Update Student" : "Add Student"}
</button>
{editId && (
<button type="button" onClick={clearForm}>
Cancel
</button>
)}
</form>
{error && <p style={{ color: "red" }}>{error}</p>}
<h2>Student List</h2>
<table border="1" cellPadding="8">
<thead>
<tr>
<th>Name</th>
<th>Course</th>
<th>Marks</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{students.length === 0 ? (
<tr>
<td colSpan="4">No students available.</td>
</tr>
) : (
students.map((student) => (
<tr key={student._id}>

<td>{student.name}</td>
<td>{student.course}</td>
<td>{student.marks}</td>
<td>
<button
type="button"
onClick={() => editStudent(student)}
>
Edit
</button>
<button
type="button"
onClick={() => deleteStudent(student._id)}
>
Delete
</button>
</td>
</tr>
))
)}
</tbody>
</table>
</div>
);
}
export default App;
