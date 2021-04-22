import React from 'react';

export class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comment } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {comment.name}
                    </h5>
                </div>
            </div>
        );
    }
}