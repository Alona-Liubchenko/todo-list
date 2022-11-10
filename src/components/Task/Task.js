import { useDispatch } from 'react-redux';
// import {
//   // deleteTask,
//   toggleCompleted,
// } from 'redux/tasksSlice';
import { deleteTask, toggleCompleted } from 'redux/operations';
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));
  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Task;
