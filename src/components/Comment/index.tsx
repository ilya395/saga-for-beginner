import React from 'react';

type ICommentProps = {
    comment: {
        title: string;
    }
}

export class Comment extends React.Component<ICommentProps> {
    constructor(props: ICommentProps) {
        super(props)
    }

    render() {
        const { comment } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {comment.title}
                    </h5>
                </div>
            </div>
        );
    }
}