import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { openModal } from "../store/actions";
import { MOVE_MODAL } from "../store/actions/actionTypes";

function* openModalGen() {
    // const move = yield call(() => {
    //     return setTimeout(() => {
    //         openModal()
    //     }, 5000)
    // });
    yield delay(5000);
    yield put(openModal());
}

export function* watchModal() {
    yield takeEvery(MOVE_MODAL, openModalGen);
}

// function setTime() {
//     setTimeout(() => {
//         openModal()
//     }, 5000);
// }