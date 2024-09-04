import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={todo.completed ? 'checked' : ''}>
      <span className="todo-text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>×</button>
    </li>
  );
};

export default TodoItem;
