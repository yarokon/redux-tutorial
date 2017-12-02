import React from 'react';
import PropTypes from 'prop-types'

import './Todo.css';

const Todo = ({ onClick, onContextMenu, completed, text }) => (
  <li
    onClick={onClick}
    onContextMenu={onContextMenu}
    className={`todo ${completed ? 'completed' : ''}`}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
