const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
.then(() => {
console.log("MongoDB Connected Successfully");
})
.catch((error) => {
console.log("MongoDB Connection Failed");
console.log(error);
});
// Simple REST API
app.get("/", (req, res) => {
res.send("Student Management API is Running");
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
