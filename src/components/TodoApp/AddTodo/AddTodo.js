import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../TodoApp/actions';

const onInput = (dispatch, input) => {
  const text = input.value.trim();

  if (text) {
    dispatch(addTodo(text));
  }

  input.value = '';
};


let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        autoFocus
        ref={node => {
          input = node;
        }}
        onKeyPress={event => {
          if(event.key === 'Enter'){
            onInput(dispatch, input);
          }
        }}
      />
      <button
        onClick={() => {
          onInput(dispatch, input);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
