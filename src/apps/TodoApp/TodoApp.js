import React from 'react';

import AddTodo from './components/AddTodo/AddTodo';
import Filter from './components/Filter/Filter';
import VisibleTodoList from './components/VisibleTodoList/VisibleTodoList';
import './TodoApp.css';

const TodoApp = () => (
  <div className='todo-app'>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
);

export default TodoApp;
