import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    

    setTasks([
      ...tasks,
      { name: taskName, completed: false },
    ]);

    setTaskName("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
    
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {task.name}
            </span>
               <button onClick={() => deleteTask(index)}>
        Delete
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
