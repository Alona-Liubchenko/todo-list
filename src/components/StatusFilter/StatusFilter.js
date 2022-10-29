import { useSelector } from 'react-redux';
import statusFilters from 'redux/constants';
import Button from 'components/Button/Button';
const StatusFilter = () => {
  const filter = useSelector(state => state.filter.status);
  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
export default StatusFilter;
