import React from "react";
import Button from "../../components/Button/Button";

const TaskList = ({ tasks, message, handleDelete, handleDone }) => {


  return (
    <>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index}>
            <ul>
                <li>{task}
                    <Button text={"Delete Task"} handleClick={() => handleDelete(index)}/>
                    <Button text={"Mark as done"} handleClick={() => handleDone(index)}/>
                </li>
            </ul>
          </div>
        ))}
        <p>{message}</p>
      </div>
    </>
  );
};

export default TaskList;
