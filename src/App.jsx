import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav/Nav"
import TaskBox from './components/TaskBox/TaskBox'

function App() {
  
const [tasks, setTasks] = useState([]);

const addTask = (newTask) => {
  setTasks([...tasks, newTask])
  console.log(newTask);
  
};


    const handleClick = () => {
      setTasks([]);
      console.log("You cleared all your tasks");  
    };


  return (
    <>
     <Nav header={"My Todos"} handleClick={handleClick}/>
     <TaskBox addTask={addTask}/>
    </>
  )
}

export default App
