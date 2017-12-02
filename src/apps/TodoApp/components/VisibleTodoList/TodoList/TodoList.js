import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo/Todo';

const TodoList = ({ todos, onTodoClick, onTodoRightClick }) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onContextMenu={e => {
          e.preventDefault();
          onTodoRightClick(todo.id);
        }}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRightClick: PropTypes.func.isRequired
}

export default TodoList;
