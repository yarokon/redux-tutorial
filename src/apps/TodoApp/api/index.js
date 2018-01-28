import { v4 } from 'uuid';

import { ALL, ACTIVE, COMPLETED } from '../actions/filterNames';

const delayTime = 500;

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true
    }, {
      id: v4(),
      text: 'ho',
      completed: true
    }, {
      id: v4(),
      text: 'let’s go',
      completed: false
    }
  ]
};

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(delayTime)
    .then(() => {
      if (Math.random() > 0.95) {
        throw new Error('Random Error!');
      }

      switch (filter) {
        case ALL:
          return fakeDatabase.todos;
        case ACTIVE:
          return fakeDatabase.todos.filter(t => !t.completed);
        case COMPLETED:
          return fakeDatabase.todos.filter(t => t.completed);
        default:
          return [];
      }
  });

export const addTodo = text => (
  delay(delayTime)
    .then(() => {
      const todo = {
        id: v4(),
        text,
        completed: false
      };

      fakeDatabase.todos.push(todo);
      return todo;
    })
);

export const toggleTodo = id => (
  delay(delayTime)
    .then(() => {
      const todo = fakeDatabase.todos.find(t => t.id === id);

      todo.completed = !todo.completed;
      return todo;
    })
);

export const deleteTodo = id => (
  delay(delayTime)
    .then(() => {
      const { todos } = fakeDatabase;
      const todo = todos.find(t => t.id === id);

      fakeDatabase.todos = todos.filter(t => t.id !== id);
      return todo;
    })
);
