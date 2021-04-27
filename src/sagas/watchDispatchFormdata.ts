import { call, delay, put } from "redux-saga/effects";

import { DiSPATCH_FORM_DATA } from "../store/actions/actionTypes";
import { closeModal, errorDispatchFormData, successDispatchFormData, waitingDispatchFormData } from '../store/actions';
import { URL_TO_ENDPOINT } from '../constants';

import * as Eff from 'redux-saga/effects';
const takeEvery: any = Eff.takeEvery;

function* workerDIspatchFormData({ payload }: {payload: {}}): Generator<{}, void, Array<object>> {
    try {
        // yield call(() => console.log('payload: ', payload) )
        yield put(waitingDispatchFormData());
        const request = yield call(() => {
            return fetch(URL_TO_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
        });
        yield put(successDispatchFormData());
        yield delay(2000);
        yield put(closeModal());
        yield call(() => console.log(request));
    } catch(e) {
        yield put(errorDispatchFormData());
    }

}

export function* watchDispatchFormData() {
    yield takeEvery(DiSPATCH_FORM_DATA, workerDIspatchFormData);
}