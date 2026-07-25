import { useState } from "react";
function TodoList() {
  const [tasks] = useState([
    "Eat Breakfast",
    "Attend React Lab",
    "Complete Assignment",
    "Go for a Walk",
    "Sleep Early"
  ]);
  return (
    <div>
      <h2>📝 To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>✅ {task}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
