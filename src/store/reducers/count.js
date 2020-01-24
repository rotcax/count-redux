import { INCREASE_COUNTER_ASYNC, DECREASE_COUNTER_ASYNC } from '../actions-type';

const initialState = {
  number: 0
};

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_COUNTER_ASYNC:
    return {
      number: state.number + action.payload
    }

    case DECREASE_COUNTER_ASYNC:
    return {
      number: state.number - action.payload
    }

    default:
    return state;
  }
}

export default countReducer;