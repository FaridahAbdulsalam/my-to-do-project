import "./App.css";

import { useEffect, useState } from "react";

import Nav from "./components/Nav/Nav";
import TaskBox from "./components/TaskBox/TaskBox";
import TaskList from "./containers/TaskList/TaskList";
import CatPosts from "./components/CatPosts/CatPosts";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState(
    "Nothing to see yet, enter a task to get started!",
  );
  const [images, setImages] = useState([]);

  const getImages = () => {
    const url = "https://api.thecatapi.com/v1/images/search";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages(data);
      });
  };

  const getTasks = async () => {
    const url = "http://localhost:3000/tasks";
    const response = await fetch(url);
    const data = await response.json();
    setTasks(data.tasks);
  };

  useEffect(() => {
    getImages();
    getTasks();
  }, []);

  const addTask = async (newTask) => {
    const url = "http://localhost:3000/tasks";
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_title: newTask,
        }),
      });
      getTasks();
    } catch (error) {
      console.log("Add failed", error);
    }
  };

  const handleReset = async () => {
    const url = "http://localhost:3000/tasks";

    try {
      const res = await fetch(url, {
        method: "DELETE",
      });

      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log("Delete Failed", error);
    }
  };

  const handleRemoveTask = async (taskId) => {
    const url = "http://localhost:3000/tasks";

    try {
      const res = await fetch(`${url}/${taskId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log("Delete Failed", error);
    }
  };

  const handleComplete = async (taskId) => {
    const url = "http://localhost:3000/tasks";

    try {
      const res = await fetch(`${url}/${taskId}`, {
        method: "PUT",
      });

      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.log("Toggle failed", error);
    }
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
      <CatPosts handleClick={getImages} cats={images} />
    </>
  );
}

export default App;
