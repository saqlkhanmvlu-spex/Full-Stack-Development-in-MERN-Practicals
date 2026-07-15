function App()
{
  const studentName = "Saqlain";
  const RollNo = "T013";
  const totalClasses = 60;
  const attendedClasses = 49;


  const attendance = (attendedClasses / totalClasses) * 100;


  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <hr />
      <p>Name : {studentName}</p>
      <p>Roll No : {RollNo}</p>
      <p>Total Classes : {totalClasses}</p>
      <p>Classes Attended : {attendedClasses}</p>
      <p>Attendance : {attendance.toFixed(2)}%</p>
      <h3>
        Status : { attendance >= 75? "Eligible for Exams" : " Not Eligible" }
      </h3>
    </div>
  );
}
export default App
