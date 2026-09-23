app.get("/students", async (req, res) => {
try {
const students = await mongoose.connection.db
.collection("students")
.find()
.toArray();
res.json(students);
}
catch (error) {
res.status(500).json({
message: "Error fetching students"
});
}
});
