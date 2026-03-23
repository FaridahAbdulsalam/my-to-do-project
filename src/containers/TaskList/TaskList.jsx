import React from "react";
import Button from "../../components/Button/Button";

const TaskList = ({ tasks, message, handleDelete }) => {


  return (
    <>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index}>
            <ul>
                <li>{task}
                    <Button text={"Delete Task"} handleClick={() => handleDelete(index)}/>
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
