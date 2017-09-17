import React from 'react';

import './Todo.css';

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    className={`todo ${completed ? 'completed' : ''}`}
  >
    {text}
  </li>
);

export default Todo;
