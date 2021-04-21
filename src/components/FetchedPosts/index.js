import React, { useEffect, } from 'react';
import Post from '../Post';

// import { downloadPostActionsOldVariant } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';

// import { URL_TO_DB } from '../../constants';
// import { fetchHelper } from '../../helpers';

import { requestPostsAction } from '../../store/actions';

export default ({ posts }) => {

    const dispatch = useDispatch();

    const fetchedPosts = useSelector(state => state.asyncPosts.fetchedPosts)

    const fetchingPosts = () => {
        console.log('load')

        // fetchHelper({dispatch, url: URL_TO_DB});
        dispatch(requestPostsAction());
    }

    useEffect(() => {
        console.log(fetchedPosts);
    }, [fetchedPosts]);

    if (!posts.length) {
        return <button className="btn btn-primary" onClick={fetchingPosts}>Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}