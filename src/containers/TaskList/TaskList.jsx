import Button from "../../components/Button/Button";

const TaskList = ({ tasks, handleDelete, handleComplete }) => {


  return (
    <>
      <div className="task-list">
        {tasks.length > 0 &&
        tasks.map((task, index) => (
          <div key={index}>
            <ul>
                <li
                style={{textDecoration: task.completed ? "line-through" : "none"}}>
                    {task.text}
                    <Button text={"Delete Task"} handleClick={() => handleDelete(index)}/>
                    <Button text={task.completed ? "Undo" : "Mark as done"} handleClick={() => handleComplete(index)}/>
                </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
