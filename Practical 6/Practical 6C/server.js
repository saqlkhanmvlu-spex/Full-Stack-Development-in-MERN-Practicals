const express = require("express");
const app = express();
const PORT = 3000;
// Home Route
app.get("/", (req, res) => {
res.send(`
<h1>MVLU College Management Server</h1>
<p>Welcome to our college website.</p>
`);
});
// Students Route
app.get("/students", (req, res) => {
res.send(`
<h1>Student List</h1>
<ul>
<li>Saqlain Khan</li>
<li>Ritesh Chaubey</li>
<li>Himani Malankar</li>
<li>Reze</li>
</ul>
`);
});
// Faculty Route
app.get("/faculty", (req, res) => {
res.send(`
<h1>Faculty List</h1>
<ul>
<li>Sneha Gokarnkar - Information Technology</li>
<li>Rohini Bhosale - Information Technology</li>

<li>Sumit Tripathi - Information Technology</li>
<li>Chetana Tanavade - Information Technology</li>
</ul>
`);
});
// Courses Route
app.get("/courses", (req, res) => {
res.send(`
<h1>Available Courses</h1>
<ul>
<li>B.Sc. Information Technology</li>
<li>B.Sc. Computer Science</li>
<li>B.Sc. Biotechnology</li>
<li>B.A. Multimedia and Mass Communication</li>
</ul>
`);
});
// Contact Route
app.get("/contact", (req, res) => {
res.send(`
<h1>Contact Us</h1>
<p>Email: info@mvlucollege.in</p>
<p>Phone: 9876543210</p>
<p>Address: Andheri, Mumbai</p>
`);
});
// Start Server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
