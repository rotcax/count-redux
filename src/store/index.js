import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../store/sagas';

const rootReducer = combineReducers({
    count: countReducer
});

const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default configureStore;