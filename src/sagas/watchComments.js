import { put, call, takeEvery } from 'redux-saga/effects';
import { URL_TO_COMMENTS } from '../constants';
import { addCommentsAction, errorCommnetsAction, waitCommentsAction } from '../store/actions';
import { REQUEST_COMMENTS } from '../store/actions/actionTypes';

function* fetchComments() {
    try {
        yield put(waitCommentsAction());
        const comments = yield call(() => {
            return fetch(URL_TO_COMMENTS)
                    .then(res => res.json())
        });
        yield put(addCommentsAction(comments));
        // yield console.log(comments)
    } catch(e) {
        yield put(errorCommnetsAction());
    }
}

export function* watchComments() {
    yield takeEvery(REQUEST_COMMENTS, fetchComments);
}