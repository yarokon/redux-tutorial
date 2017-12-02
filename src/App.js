import React from 'react';

import WelcomeApp from './apps/WelcomeApp/WelcomeApp';
import TodoApp from './apps/TodoApp/TodoApp';
import CounterApp from './apps/CounterApp/CounterApp';

const App = () => (
  <div>
    <WelcomeApp />
    <TodoApp />
    <CounterApp />
  </div>
);

export default App;
