const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB")
.then(() => {
console.log("MongoDB Connected Successfully");
app.listen(3000, () => {
console.log("Server running on port 3000");
});
})
.catch((error) => {
console.log("MongoDB Connection Failed:", error.message);
});

// Student model with validation
const Student = mongoose.model("Student", {
name: {
type: String,
required: [true, "Student name is required"],
trim: true
},
course: {
type: String,
required: [true, "Course is required"],
trim: true
},
marks: {
type: Number,
required: [true, "Marks are required"],
min: [0, "Marks cannot be less than 0"],
max: [100, "Marks cannot exceed 100"]
}
});
// Validate student data
function validateStudent(data) {
const { name, course, marks } = data;
if (
typeof name !== "string" ||
!name.trim() ||
typeof course !== "string" ||
!course.trim() ||
marks === "" ||
marks === undefined ||
!Number.isFinite(Number(marks)) ||
Number(marks) < 0 ||
Number(marks) > 100
) {
return false;
}
return true;

}
// GET: Display all students
app.get("/students", async (req, res) => {
try {
const students = await Student.find();
res.json(students);
} catch (error) {
res.status(500).json({ message: "Error fetching students" });
}
});
// POST: Add a student
app.post("/students", async (req, res) => {
if (!validateStudent(req.body)) {
return res.status(400).json({
message: "Enter a valid name, course and marks between 0 and 100"
});
}
try {
const student = await Student.create({
name: req.body.name.trim(),
course: req.body.course.trim(),
marks: Number(req.body.marks)
});
res.status(201).json({
message: "Student added successfully",
student
});
} catch (error) {
res.status(400).json({ message: "Unable to add student" });
}
});
// PUT: Update a student
app.put("/students/:id", async (req, res) => {
if (!mongoose.isValidObjectId(req.params.id)) {
return res.status(400).json({ message: "Invalid student ID" });

}
if (!validateStudent(req.body)) {
return res.status(400).json({
message: "Enter a valid name, course and marks between 0 and 100"
});
}
try {
const student = await Student.findByIdAndUpdate(
req.params.id,
{
name: req.body.name.trim(),
course: req.body.course.trim(),
marks: Number(req.body.marks)
},
{ new: true, runValidators: true }
);
if (!student) {
return res.status(404).json({ message: "Student not found" });
}
res.json({
message: "Student updated successfully",
student
});
} catch (error) {
res.status(400).json({ message: "Unable to update student" });
}
});
// DELETE: Delete a student
app.delete("/students/:id", async (req, res) => {
if (!mongoose.isValidObjectId(req.params.id)) {
return res.status(400).json({ message: "Invalid student ID" });
}
try {
const student = await Student.findByIdAndDelete(req.params.id);

if (!student) {
return res.status(404).json({ message: "Student not found" });
}
res.json({ message: "Student deleted successfully" });
} catch (error) {
res.status(500).json({ message: "Error deleting student" });
}
});
