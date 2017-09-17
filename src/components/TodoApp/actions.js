export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = (() => {
  let nextTodoId = 0;

  return text => {
    return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
    };
  }
})();

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
