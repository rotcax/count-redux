import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions-type';

// Normal Redux
// export const incrementCount = (count) => {
//   return getPayload(INCREMENT_COUNT, count + 1);
// }

// export const decrementCount = (count) => {
//   return getPayload(DECREMENT_COUNT, count - 1);
// }

// Redux Thunk
// export const incrementCount = count => dispatch => {
//   setTimeout(() => {
//     dispatch(getPayload(INCREMENT_COUNT, count + 1));
//   }, 1500);
// }

// export const decrementCount = count => dispatch => {
//   setTimeout(() => {
//     dispatch(getPayload(DECREMENT_COUNT, count - 1));
//   }, 1500);
// }

// Redux Saga
export const incrementCount = (count) => {
  return getPayload(INCREMENT_COUNT, count);
}

export const decrementCount = (count) => {
  return getPayload(DECREMENT_COUNT, count);
}

const getPayload = (type, payload) => {
  return {
    type,
    payload
  }
}