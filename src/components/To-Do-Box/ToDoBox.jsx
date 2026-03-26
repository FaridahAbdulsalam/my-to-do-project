import Button from "../../components/Button/Button";
import "./ToDoBox.css";

const ToDoBox = ({ task, index, handleComplete, handleDelete }) => {
  return (
    <>
      <div
        className="toDo-box"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleComplete(task._id)}
        />
        <p className="toDo-box_text">{task.task_title}</p>
        <Button text={"Delete"} handleClick={() => handleDelete(task._id)} />
      </div>
    </>
  );
};

export default ToDoBox;
