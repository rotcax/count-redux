import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions-type';

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