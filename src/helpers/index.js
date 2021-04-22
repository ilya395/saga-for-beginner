import { addPostsAction } from '../store/actions';
import { errorPostsAction } from '../store/actions';

export const fetchHelper = ({ dispatch, url }) => {
    fetch(url)
        .then(res => res.json())
        .then(res => dispatch( addPostsAction( res ) ) )
        .catch(e => dispatch( errorPostsAction( e ) ) )
}