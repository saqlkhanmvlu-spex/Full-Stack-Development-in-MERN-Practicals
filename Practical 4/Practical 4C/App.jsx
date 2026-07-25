import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div> 
      <h1> Button Click Counter </h1>
      <hr />
      <h2>Saqlain Clicks : {count} Times</h2>
      <button onClick={ () => setCount(count + 1)} > Click Me </button>
    </div>
  );
}
export default App;
