import React, { FC, ReactElement } from 'react';

interface IPostProps {
    post: {
        id: number,
        title: string,
    }
}

const Post: FC<IPostProps> = (props): ReactElement => { // props: {post: {title: string,}}
    const { post } = props; 
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                </h5>
            </div>
        </div>
    )
}

export default Post;