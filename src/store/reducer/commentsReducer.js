import { ADD_COMMENTS, WAIT_COMMENTS, ERROR_COMMENTS } from '../actions/actionTypes';

const initialState = {
    comments: [],
    error: false,
    wait: false,
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return {
                ...state,
                comments: [...action.payload],
                error: false,
                wait: false
            }

        case WAIT_COMMENTS:
            return {
                ...state,
                error: false,
                wait: true
            }

        case ERROR_COMMENTS:
            return {
                ...state,
                error: true,
                wait: false
            }
    
        default:
            return state;
    }
}