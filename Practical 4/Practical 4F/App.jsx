import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Button Click Counter</h1>
      <hr />

      <h2>Saqlain Clicks : {count} Times</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default App;
