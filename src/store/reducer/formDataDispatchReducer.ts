import { ERROR_DiSPATCH_FORM_DATA, START_DiSPATCH_FORM_DATA, SUCCESS_DiSPATCH_FORM_DATA, WAITING_DiSPATCH_FORM_DATA } from "../actions/actionTypes"

const initialState = {
    // 'check-box': null as boolean | null,
    // email: null as string | null,
    // inlineRadioOptions: null as string | null,
    // 'multi-select': null as Array<string> | null,
    // select: null as string | null,
    // 'text-area': null as string | null

    startDispatch: null,
    waitingDispatch: null,
    successDispatch: null,
    errorDispatch: null
}

type InitialState = typeof initialState

type FormDataDispatchReducerActionType = {
    type: string
    payload: object
}

export const formDataDispatchReducer = (state: InitialState = initialState, action: FormDataDispatchReducerActionType) => {
    switch (action.type) {
        case START_DiSPATCH_FORM_DATA:
            return {
                ...state,
                startDispatch: true,
                waitingDispatch: false,
                successDispatch: false,
                errorDispatch: false,
                payload: action.payload
            }

        case WAITING_DiSPATCH_FORM_DATA:
            return {
                ...state,
                startDispatch: false,
                waitingDispatch: true,
                successDispatch: false,
                errorDispatch: false                
            }

        case SUCCESS_DiSPATCH_FORM_DATA:
            return {
                ...state,
                startDispatch: false,
                waitingDispatch: false,
                successDispatch: true,
                errorDispatch: false                
            }

        case ERROR_DiSPATCH_FORM_DATA:
            return {
                ...state,
                startDispatch: false,
                waitingDispatch: false,
                successDispatch: false,
                errorDispatch: true                
            }
    
        default:
            return {
                ...state
            }
    }
}