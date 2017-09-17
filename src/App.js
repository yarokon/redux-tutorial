import React from 'react';

import WelcomeApp from './components/WelcomeApp/WelcomeApp';
import CounterApp from './components/CounterApp/CounterApp';
import TodoApp from './components/TodoApp/TodoApp';

const App = () => {
  return (
    <div>
      <WelcomeApp />
      <CounterApp />
      <TodoApp />
    </div>
  );
}

export default App;
