import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { modalReducer } from './modalReducer';
import { BigFormReducer } from './bigFormReducer';
import { appReducer } from './appReducer';
import { reducer as formReducer } from 'redux-form';
import { formDataDispatchReducer } from './formDataDispatchReducer';

export const rootReducer = combineReducers({
    syncPosts: postReducer,
    asyncPosts: postsReducer,
    asyncComments: commentsReducer,
    modal: modalReducer,
    bigForm: BigFormReducer,
    app: appReducer,
    form: formReducer,
    dispatchFormData: formDataDispatchReducer
});

export type RootReducerType = typeof rootReducer