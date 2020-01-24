import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../store/sagas';

const rootReducer = combineReducers({
    count: countReducer
});

// Normal Redux
// const configureStore = () => {
//     return createStore(rootReducer);
// }

// Redux Thunk
// const configureStore = () => {
//     return createStore(rootReducer, applyMiddleware(thunk));
// }

// Redux Saga
const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default configureStore;