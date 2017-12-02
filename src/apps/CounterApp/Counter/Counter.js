import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div className="counter">
    <h2 className="number">{value}</h2>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter;
