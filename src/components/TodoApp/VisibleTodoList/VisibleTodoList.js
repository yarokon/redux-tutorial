import { connect } from 'react-redux';

import TodoList from './TodoList/TodoList';
import { toggleTodo } from '../actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../filterList';

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return [];
  }
};

const mapStateToProps = ({
  todos,
  visibilityFilter
}) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
