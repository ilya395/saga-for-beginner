import { ADD_POST } from '../actions/actionTypes';
import { ICommentsOpPostsAction } from '../../interfaces';

const initialState = {
    posts: [
        {
            id: 400,
            title: 'About React'
        },
        {
            id: 410,
            title: 'About Redux'
        },
        {
            id: 420,
            title: 'About Saga'
        },
    ],
}

export const postReducer = (state = initialState, action: ICommentsOpPostsAction) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload], // state.posts.push(action.payload)
            }
    
        default:
            return state;
    }
}