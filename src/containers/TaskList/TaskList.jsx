import ToDoBox from "../../components/To-Do-Box/ToDoBox";

const TaskList = ({ tasks, handleDelete, handleComplete }) => {
  return (
    <>
      <div className="task-list">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <ToDoBox
              key={task._id}
              task={task}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </>
  );
};

export default TaskList;
