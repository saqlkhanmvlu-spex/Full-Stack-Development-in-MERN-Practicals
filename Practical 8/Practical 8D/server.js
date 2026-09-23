app.post("/students", async (req, res) => {
try {
const student = req.body;
await mongoose.connection.db
.collection("students")
.insertOne(student);
res.json({
message: "Student added successfully",
student: student
});
}
catch (error) {
res.status(500).json({
message: "Error adding student"
});
}
});
