
import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)} // ✅ fixed typo from onCahange to onChange
      />
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
