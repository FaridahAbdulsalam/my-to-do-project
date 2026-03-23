import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TaskBox from "./components/TaskBox/TaskBox";
import TaskList from "./containers/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleClick = () => {
    setTasks([]);
  };

  const handleRemoveTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Nav header={"My Todos"} handleClick={handleClick} />
      <TaskBox addTask={addTask} />
      <TaskList tasks={tasks} handleDelete={handleRemoveTask} />
    </>
  );
}

export default App;
