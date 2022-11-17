import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from 'components/TaskList/TaskList';
import TaskEditor from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);
  return (
    <>
      <TaskEditor>
        <div>{isLoading && 'Request in progress...'}</div>
      </TaskEditor>
      <TaskList />
    </>
  );
}
