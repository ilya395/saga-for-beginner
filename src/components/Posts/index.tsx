import React, { FC, ReactElement } from 'react';
import Post from '../Post';
import { connect } from 'react-redux';
import { IPosts } from '../../interfaces';

interface IPostsProps {
    posts: {id: number, title: string}[]
}

const Posts: FC<IPostsProps> = (props): ReactElement => {
    const { posts } = props;
    if (!posts.length) {
        return <p className="text-center">Пока нет</p>
    }
    return (
        <>
            {
                posts.map(post => <Post post={post} key={post.id} />)
            }
        </>
    )
}

interface IState {
    syncPosts: {
        posts: {id: number, title: string}[]
    }
}

const mapStateToProps = (state: IState) => {
    return {
        posts: state.syncPosts.posts,
        // error: state.asyncComments.error,
        // wait: state.asyncComments.wait,
    }
}

export default connect(mapStateToProps)(Posts);