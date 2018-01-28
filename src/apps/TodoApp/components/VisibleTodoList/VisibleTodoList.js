import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList/TodoList';
import FetchError from './FetchError';
import * as actions from '../../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../../reducers';

class VisibleTodoList extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;

    if (filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;

    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, deleteTodo, todos, isFetching, errorMessage } = this.props;
    const isTodosEmpty = !todos.length;

    if (isFetching && isTodosEmpty) {
      return <p>Loading...</p>;
    }

    if (errorMessage && isTodosEmpty) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={this.fetchData}
        />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
        onTodoRightClick={deleteTodo}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all';

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
