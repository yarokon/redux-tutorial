import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import todos from './apps/TodoApp/reducers/todos';
import counter from './apps/CounterApp/reducers';

const configureStore = () => {
  const rootReducer = combineReducers({
    todos,
    counter
  });

  const middlewares = [thunk, createLogger()];

  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
