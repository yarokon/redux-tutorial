import { connect } from 'react-redux';

import { increment, decrement } from './actions';
import Counter from './Counter/Counter';

const mapStateToProps = state => {
  return {
    value: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDecrement: () => {
      dispatch(decrement());
    },
    onIncrement: () => {
      dispatch(increment());
    },
  }
};

const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterApp;
