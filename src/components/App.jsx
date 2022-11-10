// import Layout from './Layout/Layout';
// import AppBar from './AppBar/AppBar';
// import TaskForm from './TaskForm/TaskForm';
// import TaskList from './TaskList/TaskList';
// export const App = () => {
//   return (
//     <Layout>
//       <AppBar />
//       <TaskForm />
//       <TaskList />
//     </Layout>
//   );
// };

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Layout from './Layout/Layout';
import AppBar from './AppBar/AppBar';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const { items, isLoading, error } = useSelector(getTasks);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    // <div>
    //   {isLoading && <p>Loading tasks...</p>}
    //   {error && <p>{error}</p>}
    //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    // </div>

    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
    //
  );
};
