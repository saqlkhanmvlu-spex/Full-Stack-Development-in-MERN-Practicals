function App()
{
  const emp = "Saqlain";
  const dep = "TYIT";
  const sal = 50000;
  const roll = "T013";
  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name : {emp}</p>
      <p>Department : {dep}</p>
      <p>Salary : ₹{sal}</p>
      <p>Roll No : {roll}</p>
    </div>
  );
}
export default App
