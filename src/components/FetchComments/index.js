import React from 'react';
import { Comment } from '../Comment';
import { connect } from 'react-redux';
import { requestCommentsAction } from '../../store/actions';

class FetchComments extends React.Component {
    constructor(props) {
        super(props)
    }

    loadCommnents = () => {
        console.log('load comments')

        const { addComments } = this.props;
        addComments();
    }

    render() {
        const { comments } = this.props;

        if (!comments.length) {
            return <button className="btn btn-primary" onClick={this.loadCommnents}>Загрузить</button>
        }
        return comments.map(item => <Comment comment={item} key={+item.id} />)
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComments: () => dispatch(requestCommentsAction()),
    }
}

export default connect(null, mapDispatchToProps)(FetchComments);