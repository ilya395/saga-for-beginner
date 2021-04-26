import { ADD_POSTS, ERROR_DOWNLOAD_POSTS, WAIT_POSTS } from '../actions/actionTypes';
import { ICommentsOpPostsAction } from '../../interfaces';

export const initialState = {
    fetchedPosts: [],
    error: false,
    wait: false
}

export type InitialStateType = typeof initialState

export const postsReducer = (state: InitialStateType = initialState, action: ICommentsOpPostsAction) =>  {

    switch (action.type) {
        case ERROR_DOWNLOAD_POSTS:
            return {
                ...state,
                wait: false,
                error: true
            }

        case WAIT_POSTS:
            return {
                ...state,
                wait: true,
                error: false,
            }

        case ADD_POSTS:
            return {
                ...state,
                fetchedPosts: [...state.fetchedPosts, ...action.payload],
                wait: false,
                error: false
            }
 
        default:
            return state;
    }
}