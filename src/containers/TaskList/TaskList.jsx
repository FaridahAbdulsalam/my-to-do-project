
import ToDoBox from "../../components/To-Do-Box/ToDoBox";

const TaskList = ({ tasks, handleDelete, handleComplete }) => {


  return (
    <>
      <div className="task-list">
        {tasks.length > 0 &&
        tasks.map((task, index) => (
          <ToDoBox key={index} task={task} index={index} handleComplete={handleComplete} handleDelete={handleDelete}/>
        ))}
      </div>
    </>
  );
};

export default TaskList;
