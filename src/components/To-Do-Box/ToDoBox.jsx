import Button from "../../components/Button/Button";
import "./ToDoBox.css"

const ToDoBox = ({ task, index, handleComplete, handleDelete }) => {
  return (
    <>
      <div className="toDo-box" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleComplete(index)}
        />
        <p className="toDo-box_text">{task.text}</p>
        <Button text={"Delete Task"} handleClick={() => handleDelete(index)} />
      </div>
    </>
  );
};

export default ToDoBox;
