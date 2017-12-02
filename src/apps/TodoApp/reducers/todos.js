import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import todo from './todo';
import {
  ADD_TODO, TOGGLE_TODO, DELETE_TODO,
  SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED
} from '../actions';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    case DELETE_TODO:
      return omit(state, action.id);
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    case DELETE_TODO:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);

  switch (filter) {
    case SHOW_ALL:
      return allTodos;
    case SHOW_ACTIVE:
      return allTodos.filter(t => !t.completed);
    case SHOW_COMPLETED:
      return allTodos.filter(t => t.completed);
    default:
      return [];
  }
};
