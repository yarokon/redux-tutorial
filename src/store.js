import { combineReducers, createStore } from 'redux';

import counter from './components/CounterApp/reducers';
import * as todos from './components/TodoApp/reducers';

const reduxTutorial = combineReducers({
  counter,
  ...todos,
});

const store = createStore(
  reduxTutorial,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
