import { all } from 'redux-saga/effects'; 
import { watchPosts } from './watchPosts';
import { watchComments } from './watchComments';

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchComments()
    ])
}