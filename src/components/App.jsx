import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));
export const App = () => {
  const dispath = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/tasks"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
          <Route
            path="tasks"
            element={
              <PrivateRoute component={<TasksPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};
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

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import Layout from './Layout/Layout';
// import AppBar from './AppBar/AppBar';
// import TaskForm from './TaskForm/TaskForm';
// import TaskList from './TaskList/TaskList';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   // const { items, isLoading, error } = useSelector(getTasks);
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);
//   return (
//     // <div>
//     //   {isLoading && <p>Loading tasks...</p>}
//     //   {error && <p>{error}</p>}
//     //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     // </div>

//     // <Layout>
//     //   <AppBar />
//     //   <TaskForm />
//     //   {isLoading && !error && <b>Request in progress...</b>}
//     //   <TaskList />
//     // </Layout>
//     //

//   );
// };
