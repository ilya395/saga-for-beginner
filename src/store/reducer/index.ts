import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
    syncPosts: postReducer,
    asyncPosts: postsReducer,
    asyncComments: commentsReducer,
    modal: modalReducer
});