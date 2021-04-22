import { call, put, takeEvery } from 'redux-saga/effects';
// import { fetchHelper } from '../helpers';
import { URL_TO_DB } from '../constants';
import { waitPostAction, addPostsAction, errorPostsAction } from '../store/actions/index'
import { REQUESTS_POSTS } from '../store/actions/actionTypes';

function* fetchPosts() {
    try {
        yield put(waitPostAction()); // тут меняется состояние на ожидание
        // достань данные
        const posts = yield call(() => { 
            return fetch(URL_TO_DB)
                    .then(res => res.json())
        });
        // положи в стайт
        yield put(addPostsAction(posts)); // тут меняется состояние на отрисовку
        // yield console.log(posts)
    } catch(e) {
        // ошибки покажи
        yield put(errorPostsAction())
    }
}

export function* watchPosts() {
    yield takeEvery(REQUESTS_POSTS, fetchPosts)
}