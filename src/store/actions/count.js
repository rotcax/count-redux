import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions-type';

export const incrementCount = (count) => {
  return getPayload(INCREMENT_COUNT, count + 1);
}

export const decrementCount = (count) => {
  return getPayload(DECREMENT_COUNT, count - 1);
}

const getPayload = (type, payload) => {
  return {
    type,
    payload
  }
}