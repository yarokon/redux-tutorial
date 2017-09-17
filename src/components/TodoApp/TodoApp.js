import React from 'react';

import './TodoApp.css';
import AddTodo from './AddTodo/AddTodo';
import VisibleTodoList from './VisibleTodoList/VisibleTodoList';
import Footer from './Footer/Footer';

const TodoApp = () => {
  return (
    <div className='todo-app'>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default TodoApp;
