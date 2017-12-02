import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList/TodoList';
import { toggleTodo, deleteTodo } from '../../actions';
import { getVisibleTodos } from '../../reducers';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state,
    ownProps.match.params.filter || 'all'
  )
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  {
    onTodoClick: toggleTodo,
    onTodoRightClick: deleteTodo
  }
)(TodoList));

export default VisibleTodoList;
