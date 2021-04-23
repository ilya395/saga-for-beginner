import React, { FC, ReactElement } from 'react';
import Post from '../Post';

// import { downloadPostActionsOldVariant } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';

// import { URL_TO_DB } from '../../constants';
// import { fetchHelper } from '../../helpers';

import { requestPostsAction } from '../../store/actions';
import { Spiner } from '../Spinner';

interface IFetchPosts {
    title: string;
    id: number;
}

interface IState {
    asyncPosts: {
        fetchedPosts: IFetchPosts[]; 
        wait: boolean;
        error: boolean;
    }
}

type IFetchedPostsProps = {}

const FetchedPosts: FC<IFetchedPostsProps> = () => {

    const dispatch = useDispatch();

    const state = useSelector((state: IState) => state.asyncPosts);
    const { fetchedPosts: posts, wait, error } = state;
    // console.log(state)

    // const fetchedPosts = useSelector(state => state.asyncPosts.fetchedPosts)

    const fetchingPosts = () => {
        console.log('load')

        dispatch(requestPostsAction());
    }

    if (wait) {
        return <Spiner />
    }

    if (error) {
        return <p className="text-center">Что-то пошло не так...</p>
    }

    if (!posts.length) {
        return <button className="btn btn-primary" onClick={fetchingPosts}>Загрузить</button>
    }

    return (
        <>
            {
                posts.map((post) => <Post post={post} key={post.id} />)
            }
        </>
    )
}

export default FetchedPosts;