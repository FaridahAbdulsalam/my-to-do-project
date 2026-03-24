import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TaskBox from "./components/TaskBox/TaskBox";
import TaskList from "./containers/TaskList/TaskList";
import CatPosts from "./components/CatPosts/CatPosts";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] =useState("Nothing to see yet, enter a task to get started!");
  const [images, setImages] = useState([]);


  // const getImages = async() => {
  //   const url = "https://api.thecatapi.com/v1/images/search";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setImages(data)};

  const getImages = () => {
    const url = "https://api.thecatapi.com/v1/images/search"

    fetch(url).then((res) => {
      return res.json()
    }).then((data) => {
      setImages(data)
    })
  }

   useEffect(() => {getImages();
   }, []);

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
      {tasks.length === 0 && <p>{message}</p>}
      <TaskList
        tasks={tasks}
        handleDelete={handleRemoveTask}
        handleComplete={handleComplete}
      />
      <CatPosts handleClick={getImages} cats={images}/>
    </>
  );
}

export default App;
