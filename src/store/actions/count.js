import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions-type';

export const incrementCount = count => dispatch => {
  setTimeout(() => {
    dispatch(getPayload(INCREMENT_COUNT, count + 1));
  }, 1500);
}

export const decrementCount = count => dispatch => {
  setTimeout(() => {
    dispatch(getPayload(DECREMENT_COUNT, count - 1));
  }, 1500);
}

const getPayload = (type, payload) => {
  return {
    type,
    payload
  }
}