import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <h4>Could not fetch todos</h4>
    <p>Message: {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;
