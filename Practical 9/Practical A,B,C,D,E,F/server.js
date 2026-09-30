const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/UserDB")
.then(() => {
console.log("MongoDB Connected Successfully");
})
.catch((error) => {
console.log("MongoDB Connection Failed");
console.log(error);
});
// GET - Retrieve Users
app.get("/users", async (req, res) => {
try {
const users = await mongoose.connection.db
.collection("users")
.find()
.toArray();
res.json(users);
}
catch (error) {
res.status(500).json({message: "Error fetching users"});
}
});
// POST - Add User
app.post("/users", async (req, res) => {
try {
const user = req.body;
await mongoose.connection.db
.collection("users")
.insertOne(user);

res.json({message: "User added successfully"});
}
catch (error) {
res.status(500).json({message: "Error adding user"});
}
});
// PUT - Update User
app.put("/users/:id", async (req, res) => {
try {
const id = new mongoose.Types.ObjectId(req.params.id);
const updatedUser = req.body;
await mongoose.connection.db
.collection("users")
.updateOne({ _id: id },
{
$set: {
name: updatedUser.name,
email: updatedUser.email,
city: updatedUser.city
}
}
);
res.json({message: "User updated successfully"});
}
catch (error) {
res.status(500).json({message: "Error updating user"});
}
});
// DELETE - Delete User
app.delete("/users/:id", async (req, res) => {
try {
const id = new mongoose.Types.ObjectId(req.params.id);
await mongoose.connection.db
.collection("users")
.deleteOne({
_id: id

});
res.json({message: "User deleted successfully"});
}
catch (error) {
res.status(500).json({message: "Error deleting user"});
}
});
// Start Server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
