function App()
{
  const maths = 67;
  const sci = 69;
  function calculate(marks1, marks2) { return marks1 + marks2; }
  return (
    <div>
      <h1> Student Marks </h1>
      <h3> Student Name : Saqlain Khan </h3>
      <h2> Roll No : T013 </h2>
      <p> Mathematics Marks : {maths} </p>
      <p> Science Marks : {sci} </p>
      <hr />
      <h2> Total Marks : {calculate(maths,sci)}</h2>
    </div>
  );
}
export default App
