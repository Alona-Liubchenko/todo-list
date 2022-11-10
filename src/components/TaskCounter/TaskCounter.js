import { useSelector } from 'react-redux';
import {
  // selectTasks,
  selectTaskCount,
} from 'redux/selectors';
const TaskCounter = () => {
  // const tasks = useSelector(selectTasks);
  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { active: 0, completed: 0 }
  // );
  const count = useSelector(selectTaskCount);
  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
export default TaskCounter;
