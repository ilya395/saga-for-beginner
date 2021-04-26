import { ADD_COMMENTS, WAIT_COMMENTS, ERROR_COMMENTS } from '../actions/actionTypes';

import { ICommentsOpPostsAction } from '../../interfaces';

const initialState = {
    comments: [],
    error: false,
    wait: false,
}

export type IinitialStateType = typeof initialState

export const commentsReducer = (state: IinitialStateType = initialState, action: ICommentsOpPostsAction) => {
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