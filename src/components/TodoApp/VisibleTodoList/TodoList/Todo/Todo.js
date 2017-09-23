import React from 'react';
import PropTypes from 'prop-types'

import './Todo.css';

const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    onClick={onClick}
    className={`todo ${completed ? 'completed' : ''}`}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
