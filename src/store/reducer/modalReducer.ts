import { CLOSE_MODAL, OPEN_MODAL } from "../actions/actionTypes";

interface IModalReducerAction {
    type: string
}

const initialState = {
    modal: false,
}

export const modalReducer = (state = initialState, action: IModalReducerAction) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: true,
            }

        case CLOSE_MODAL:
            return {
                ...state,
                modal: false,
            }
    
        default:
            return {
                ...state
            }
    }
}