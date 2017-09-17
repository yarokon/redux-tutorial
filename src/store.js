import { combineReducers, createStore } from 'redux';

import { counter } from './components/CounterApp/store';
import { todos, visibilityFilter } from './components/TodoApp/store';

const reduxTutorial = combineReducers({
  counter,
  todos,
  visibilityFilter
});

const store = createStore(
  reduxTutorial,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
