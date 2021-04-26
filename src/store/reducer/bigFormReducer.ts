import { REQUEST_VALID_FORM, SAVE_FORM, VALID_FORM_SUCCESS, VALID_FORM_UNSUCCESS } from "../actions/actionTypes";
// import { ValidFormSuccessActionType, ValidFormUnSuccessActionType } from '../actions'

const initialState = {
    requestValid: false,
    valid: false,
    save: false
}

type InitialStateType = typeof initialState;

type BigFormReducerActionType = {
    type: string
}

export const BigFormReducer = (state: InitialStateType = initialState, action: BigFormReducerActionType) => {
    switch (action.type) {
        case SAVE_FORM:
            return {
                ...state,
                save: true
            }

        case VALID_FORM_SUCCESS:
            return {
                ...state,
                requestValid: false,
                valid: true,
            }

        case VALID_FORM_UNSUCCESS:
            return {
                ...state,
                requestValid: false,
                valid: false
            }

        case REQUEST_VALID_FORM:
            return {
                ...state,
                requestValid: true,
                valid: false
            }
    
        default:
            return {
                ...state
            }
    }
}