import { INCREMENT_COUNT, DECREMENT_COUNT, INCREASE_COUNTER_ASYNC, DECREASE_COUNTER_ASYNC } from '../actions-type';

const initialState = {
  number: 0
};

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:
    return {
      number: action.payload
    }

    case DECREMENT_COUNT:
    return {
      number: action.payload
   }

    default:
    return state;
  }
}

export default countReducer;