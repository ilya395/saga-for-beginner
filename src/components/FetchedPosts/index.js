import React from 'react';
import Post from '../Post';

// import { downloadPostActionsOldVariant } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';

// import { URL_TO_DB } from '../../constants';
// import { fetchHelper } from '../../helpers';

import { requestPostsAction } from '../../store/actions';
import { Spiner } from '../Spinner';

const FetchedPosts = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.asyncPosts);
    const { fetchedPosts: posts, wait, error } = state;
    // console.log(state)

    // const fetchedPosts = useSelector(state => state.asyncPosts.fetchedPosts)

    const fetchingPosts = () => {
        console.log('load')

        // fetchHelper({dispatch, url: URL_TO_DB});
        dispatch(requestPostsAction());
    }

    // useEffect(() => {
    //     console.log(posts);
    // }, [posts]);

    if (wait) {
        return <Spiner />
    }

    if (error) {
        return <p className="text-center">Что-то пошло не так...</p>
    }

    if (!posts.length) {
        return <button className="btn btn-primary" onClick={fetchingPosts}>Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}

export default FetchedPosts;