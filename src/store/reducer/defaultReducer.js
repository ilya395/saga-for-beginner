// import { ADD_POST, ADD_POSTS, ERROR_DOWNLOAD_POSTS, WAIT_POSTS } from '../actions/actionTypes';

// export const initialState = {
//     posts: [
//         {
//             id: 400,
//             title: 'About React'
//         },
//         {
//             id: 410,
//             title: 'About Redux'
//         },
//         {
//             id: 420,
//             title: 'About Saga'
//         },
//     ],
//     fetchedPosts: [],
//     error: false,
//     wait: false
// }

// const defaultReducer = (state, action) =>  {

//     switch (action.type) {
//         case ADD_POST:
//             return {
//                 ...state,
//                 posts: [...state.posts, action.payload], // state.posts.push(action.payload)
//             }

//         case ERROR_DOWNLOAD_POSTS:
//             return {
//                 ...state,
//                 wait: false,
//                 error: true
//             }

//         case WAIT_POSTS:
//             return {
//                 ...state,
//                 wait: true,
//                 error: false,
//             }

//         case ADD_POSTS:
//             return {
//                 ...state,
//                 fetchedPosts: [...state.fetchedPosts, ...action.payload],
//                 wait: false,
//                 error: false
//             }
 
//         default:
//             return state;
//     }
// }

// export default defaultReducer;