import { 
    ADD_POST, 
    ADD_POSTS, 
    ERROR_DOWNLOAD_POSTS, 
    WAIT_POSTS, 
    REQUESTS_POSTS, 
    ADD_COMMENTS, 
    ERROR_COMMENTS, 
    WAIT_COMMENTS,
    REQUEST_COMMENTS
} from './actionTypes';
// import { URL_TO_DB } from '../../constants';

// action creators

// post
export const addPostAction = (payload) => {
    return {
        type: ADD_POST,
        payload,
    }
}

// posts
export const addPostsAction = (payload) => {
    return {
        type: ADD_POSTS,
        payload,
    }
}

export const errorPostsAction = () => {
    return {
        type: ERROR_DOWNLOAD_POSTS,
    }
}

export const waitPostAction = () => {
    return {
        type: WAIT_POSTS
    }
}

export const requestPostsAction = () => {
    return {
        type: REQUESTS_POSTS
    }
}

// comments
export const addCommentsAction = (payload) => {
    return {
        type: ADD_COMMENTS,
        payload
    }
}

export const errorCommnetsAction = () => {
    return {
        type: ERROR_COMMENTS
    }
}

export const waitCommentsAction = () => {
    return {
        type: WAIT_COMMENTS
    }
}

export const requestCommentsAction = () => {
    return {
        type: REQUEST_COMMENTS
    }
}


// export const downloadPostActionsOldVariant = () => {
//     return async (dispatch) => {
//         console.log('load start');
//         // let response = await fetch(URL_TO_DB);
//         fetch(URL_TO_DB)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res);
//                 return res;
//             })
//             .then(res => dispatch( addPostsAction( res ) ) )
//             .catch(e => dispatch( errorPostsAction( e ) ) )
//     }
// }
