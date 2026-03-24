import "./TaskBox.css";

const TaskBox = ({addTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = e.target[0].value;
    if(newTask.trim() === ""){
      alert("Please enter a to-do");
      return;
    } 
    
    addTask(newTask);

    e.target.reset();
  };

  return (
    <>
      <div className="searchbox">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter task here" />
        </form>
      </div>
    </>
  );
};

export default TaskBox;
