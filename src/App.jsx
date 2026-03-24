import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TaskBox from "./components/TaskBox/TaskBox";
import TaskList from "./containers/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleReset = () => {
    setTasks([]);
  };

  const handleRemoveTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskToRemove);
    setTasks(updatedTasks);
  };

  const handleComplete = (taskToRemove) => {
    //index of task to remove
    const updatedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (i === taskToRemove) {
        updatedTasks.push({
          ...tasks[i],
          completed: !tasks[i].completed,
        });
      } else {
        updatedTasks.push(tasks[i]);
      }
    }
    setTasks(updatedTasks);
  };

  return (
    <>
      <Nav header={"My Todos"} handleClick={handleReset} />
      <TaskBox addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleDelete={handleRemoveTask}
        handleComplete={handleComplete}
      />
    </>
  );
}

export default App;
