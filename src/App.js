import { useState } from "react";
import "./App.css";

function App() {
  let [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  let onChangeHandler = (event) => {
    if (task === "") {
      return;
    } else {
      console.log(task);
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  let onCheckHandler = (event) => {
    console.log(tasks);
  };

  let onDeleteHandler = (i) => {
    setTasks(() =>
      tasks.filter((taskitem, index) => {
        return index !== i;
      })
    );
  };
  return (
    <>
      <div className="create">
        <input
          className="inputObject"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChangeHandler();
            }
          }}
        ></input>
        <button className="enter" onClick={onChangeHandler}>
          +
        </button>
      </div>
      <div>
        <ui>
          {tasks.map((t, index) => (
            <span>
              <li key={index}>
                {t}
                <button onClick={() => onDeleteHandler(index)}>Delete</button>
              </li>
            </span>
          ))}
        </ui>
      </div>
    </>
  );
}

export default App;
