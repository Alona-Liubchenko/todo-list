const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checker={task.completed} />
      <p>{task.text}</p>
      <button>X</button>
    </div>
  );
};
export default Task;
