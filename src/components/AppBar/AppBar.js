import TaskCounter from 'components/TaskCounter/TaskCounter';
import StatusFilter from 'components/StatusFilter/StatusFilter';
const AppBar = () => {
  return (
    <header>
      <section>
        <h2>Task</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
export default AppBar;
