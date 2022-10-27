import { useState } from 'react';
import TodoList from './TodoList/TodoList';
export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText('');
  };
  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };
  const toggleTodoComplete = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div>
      <label htmlFor="">
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="button" onClick={addTodo}>
          Add Todo
        </button>
      </label>
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};
