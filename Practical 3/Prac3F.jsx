function App()
{
  const currentDate = new Date();
  return (
    <div>
      <h1> Current Date and Time </h1>
      <hr />
      <p> Date : {currentDate.toLocaleDateString()} </p>
      <p> Time : {currentDate.toLocaleTimeString()}</p>
    </div>
  );
}
export default App;
