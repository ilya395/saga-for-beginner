const initialState = {
    formType: 'redux'
}

type InitialStateType = typeof initialState

type appReducerActionType = {
    type: string
    formType: string
}

export const appReducer = (state: InitialStateType = initialState, action: appReducerActionType) => {
    switch(action.type) {
        case 'custom':
            return {
                ...state,
                formType: 'custom'
            }

        case 'redux':
            return {
                ...state,
                formType: 'redux'
            }

        default: 
            return {
                state
            }
    }
}