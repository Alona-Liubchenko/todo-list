// import TaskCounter from 'components/TaskCounter/TaskCounter';
// import StatusFilter from 'components/StatusFilter/StatusFilter';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
const AppBar = () => {
  const isLoggedIn = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <section>
        <h2>Task</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section> */}
    </header>
  );
};
export default AppBar;
