import { all } from 'redux-saga/effects'; 
import { watchPosts } from './watchPosts';
import { watchComments } from './watchComments';
import { watchModal } from './watchModal';

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchComments(),
        watchModal()
    ])
}