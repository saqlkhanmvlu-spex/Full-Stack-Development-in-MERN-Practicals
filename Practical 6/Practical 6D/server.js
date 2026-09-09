const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
res.send("Welcome to MVLU College Management Server");
});
app.get("/students", (req, res) => {
const students = [
{
id: 1,
name: "Saqlain Khan",
course: "B.Sc. IT",
marks: 85
},
{
id: 2,
name: "Ritesh Chaubey",
course: "B.Sc. IT",
marks: 92
},
{
id: 3,
name: "Himani Malankar",
course: "B.Sc. CS",
marks: 78
}
];
res.json(students);
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
