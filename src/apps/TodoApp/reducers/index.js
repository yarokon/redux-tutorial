import * as fromTodos from './todos';

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);

export const getIsFetching = (state, filter) =>
  fromTodos.getIsFetching(state.todos, filter);

export const getErrorMessage = (state, filter) =>
  fromTodos.getErrorMessage(state.todos, filter);
