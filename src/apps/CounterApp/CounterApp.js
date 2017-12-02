import { connect } from 'react-redux';

import { increment, decrement } from './actions';
import Counter from './Counter/Counter';

const mapStateToProps = state => ({
  value: state.counter
});

const CounterApp = connect(
  mapStateToProps,
  {
    onIncrement: increment,
    onDecrement: decrement
  }
)(Counter);

export default CounterApp;
