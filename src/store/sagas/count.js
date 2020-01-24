import { delay, put, takeLatest } from 'redux-saga/effects';
import { INCREASE_COUNTER_ASYNC, INCREMENT_COUNT, DECREASE_COUNTER_ASYNC, DECREMENT_COUNT } from '../actions-type';

function* increaseCounterAsync() {
  try {
    yield delay(4000);
    yield put({
      type: INCREASE_COUNTER_ASYNC,
      payload: 1
    });

  } catch (error) {
    console.log(error);
  }
}

function* decreaseCounter() {
  try {
    yield put({
      type: DECREASE_COUNTER_ASYNC,
      payload: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchIncreaseCounter() {
  yield takeLatest(INCREMENT_COUNT, increaseCounterAsync);
}

export function* watchDecreaseCounter() {
  yield takeLatest(DECREMENT_COUNT, decreaseCounter);
};