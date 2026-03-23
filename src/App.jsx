import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav/Nav"
import TaskBox from './components/TaskBox/TaskBox'
import TaskList from './containers/TaskList/TaskList';

function App() {
  
const [tasks, setTasks] = useState([]);
// const [message, setMessage] = ("Nothing to see here yet, add a task in the field above")


const addTask = (newTask) => {
  setTasks([...tasks, newTask])
  console.log(newTask);
  
};


    const handleClick = () => {
      setTasks([]);
      console.log("You cleared all your tasks");  
    };

    const handleRemoveTask = (taskToRemove) => {
      const updatedTasks = tasks.filter((task, index) => index !== taskToRemove);
      setTasks(updatedTasks)
    }

    // const handleCompleteTask = (taskToStrike) => {
      
    //   setTasks(updatedTasks)
    // }


  return (
    <>
     <Nav header={"My Todos"} handleClick={handleClick}/>
     <TaskBox addTask={addTask}/>
     <TaskList tasks={tasks} handleDelete={handleRemoveTask} handleDone={handleCompleteTask}/>
    </>
  )
}

export default App
