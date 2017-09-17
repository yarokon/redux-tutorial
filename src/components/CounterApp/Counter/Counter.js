import React from 'react';

import './Counter.css';

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div className="counter">
    <h2>{value}</h2>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

export default Counter;
