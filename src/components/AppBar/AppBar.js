// import TaskCounter from 'components/TaskCounter/TaskCounter';
// import StatusFilter from 'components/StatusFilter/StatusFilter';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import {  Header} from './AppBar.styled';


const MenuAppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
    //     {/* <section>
    //   <h2>Task</h2>
    //   <TaskCounter />
    // </section>
    // <section>
    //   <h2>Filter by status</h2>
    //   <StatusFilter />
    // </section> */}
  );
};
export default MenuAppBar;
