import { useState } from "react";

function TodoList() {
  const [task, SetTask] = useState("");
  const [data, SetData] = useState([]);

  const AddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      SetData([...data, { id: Date.now(), name: task, completed: false }]);
      SetTask("");
      console.log(data);
    }
  };

  const toggleTask = (id) => {
    SetData(
      data.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <>
      <h4>Todo List app</h4>
      <form onSubmit={AddTask}>
        <lebel>
          <input
            type="text"
            value={task}
            onChange={(e) => SetTask(e.target.value)}
          />
        </lebel>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {data.map((t) => {
          return (
            <>
              <li key={t.id} style={{ color: t.completed ? "red" : "green" }}>
                {t.name}
                <button onClick={() => toggleTask(t.id)}>
                  {t.completed ? "Undo" : "complete"}
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default TodoList;
