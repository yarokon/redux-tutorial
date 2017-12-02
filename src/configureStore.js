import { combineReducers, createStore } from 'redux';
import throttle from 'lodash/throttle';

import todos from './apps/TodoApp/reducers/todos';
import counter from './apps/CounterApp/reducers';
import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = ({ getState, dispatch }) => (
  action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = dispatch(action);
    console.log('%c next state', 'color: green', getState());
    console.groupEnd(action.type);

    return returnValue;
  }
);

const configureStore = () => {
  const reduxTutorial = combineReducers({
    todos,
    counter
  });

  const persistedState = loadState();

  const store = createStore(
    reduxTutorial,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch = addLoggingToDispatch(store);
  store.subscribe(throttle(() => saveState(store.getState()), 1e3));

  return store;
};

export default configureStore;
