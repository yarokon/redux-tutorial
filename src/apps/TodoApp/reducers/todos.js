import { combineReducers } from 'redux';

import { ALL, ACTIVE, COMPLETED } from '../actions/filterNames';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';


const listByFilter = combineReducers({
  [ALL]: createList(ALL),
  [ACTIVE]: createList(ACTIVE),
  [COMPLETED]: createList(COMPLETED),
});

const todos = combineReducers({
  byId,
  listByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) => (
  fromList.getIsFetching(state.listByFilter[filter])
);

export const getErrorMessage = (state, filter) => (
  fromList.getErrorMessage(state.listByFilter[filter])
);
