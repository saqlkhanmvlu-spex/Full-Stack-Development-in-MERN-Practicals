import { useState } from "react";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Student Registration Form</h2>

      <input type="text" placeholder="Student Name" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="text" placeholder="Roll Number" onChange={(e) => setRoll(e.target.value)} /><br /><br />
      <input type="text" placeholder="Branch" onChange={(e) => setBranch(e.target.value)} /><br /><br />
      <input type="text" placeholder="CGPA" onChange={(e) => setCgpa(e.target.value)} /><br /><br />

      <button onClick={() => setShow(true)}>Submit</button>

      {show && (
        <div>
          <h3>Student Details</h3>
          <p>Name : {name}</p>
          <p>Roll No : {roll}</p>
          <p>Branch : {branch}</p>
          <p>CGPA : {cgpa}</p>
        </div>
      )}
    </div>
  );
}

export default StudentRegistration;
