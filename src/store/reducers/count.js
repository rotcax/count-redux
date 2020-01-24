import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions-type';

const initialState = {
  number: 0
};

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    // Normal Redux | Redux Saga
  //   case INCREMENT_COUNT:
  //   return {
  //     number: action.payload
  //   }

  //   case DECREMENT_COUNT:
  //   return {
  //     number: action.payload
  //  }

    case 'INCREASE_COUNTER_ASYNC':
    return {
      number: state.number + action.payload
    }

    case 'DECREASE_COUNTER_ASYNC':
    return {
      number: state.number - action.payload
    }

    default:
    return state;
  }
}

export default countReducer;