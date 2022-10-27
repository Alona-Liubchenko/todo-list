const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
  console.log(text);
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
