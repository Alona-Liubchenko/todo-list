import { useSelector } from 'react-redux';
import Task from 'components/Task/Task';
// import statusFilters from 'redux/constants';
import {
  // selectTasks,
  // selectStatusFilter,
  selectVisibleTasks,
} from 'redux/selectors';
// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };
const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  // const statusFilter = useSelector(selectStatusFilter);
  // const visibleTask = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
