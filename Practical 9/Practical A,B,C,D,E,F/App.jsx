import { useEffect, useState } from "react";
import axios from "axios";
function App() {
// Store all users
const [users, setUsers] = useState([]);
// Form data
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [city, setCity] = useState("");
// Store ID of user being edited
const [editId, setEditId] = useState(null);
// Get Users from MongoDB
const getUsers = () => {
axios.get("http://localhost:3000/users")
.then((response) => {

setUsers(response.data);
})
.catch((error) => {
console.log(error);
});
};
// Load users when page starts
useEffect(() => {getUsers();}, []);
// Add or Update User
const saveUser = () => { const user = {
name: name,
email: email,
city: city
};
// UPDATE existing user
if (editId) {axios.put(`http://localhost:3000/users/${editId}`, user)
.then((response) => {alert(response.data.message);
clearForm();
getUsers();
})
.catch((error) => {console.log(error);});
}
// ADD new user
else {axios.post("http://localhost:3000/users", user)
.then((response) => {alert(response.data.message);
clearForm();
getUsers();
})
.catch((error) => {console.log(error);});
}
};
// Edit User
const editUser = (user) => {setEditId(user._id);

setName(user.name);
setEmail(user.email);
setCity(user.city);
};
// Delete User
const deleteUser = (id) => {
if (window.confirm("Are you sure you want to delete this user?")) {
axios.delete(`http://localhost:3000/users/${id}`)
.then((response) => {alert(response.data.message);
getUsers();
})
.catch((error) => {console.log(error);});
}
};
// Clear Form
const clearForm = () => {
setName("");
setEmail("");
setCity("");
setEditId(null);
};
return (
<div>
<h1>User Management System</h1>
{/* User Form */}
<h2>
{editId ? "Update User" : "Add User"}
</h2>
<input type="text"
placeholder="Enter Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<br /><br />

<input type="email"
placeholder="Enter Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<br /><br />
<input type="text"
placeholder="Enter City"
value={city}
onChange={(e) => setCity(e.target.value)}
/>
<br /><br />
<button onClick={saveUser}>
{editId ? "Update User" : "Add User"}
</button>
{editId && (<button onClick={clearForm}>
Cancel
</button>
)}
<hr />
{/* Display Users */}
<h2>User List</h2>
<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>City</th>
<th>Actions</th>
</tr>
</thead>
<tbody>

{users.map((user) => (
<tr key={user._id}>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.city}</td>
<td>
<button onClick={() => editUser(user)}>
Edit
</button>
<button onClick={() => deleteUser(user._id)}>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default App;
