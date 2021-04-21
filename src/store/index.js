import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';

import { rootSaga } from '../sagas';
import { watchComments } from '../sagas/watchComments'
import { watchPosts } from '../sagas/watchPosts'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)  
);

sagaMiddleware.run(rootSaga);
