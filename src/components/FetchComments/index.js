import React from 'react';
import { Comment } from '../Comment';
import { connect } from 'react-redux';
import { requestCommentsAction } from '../../store/actions';
import { Spiner } from '../Spinner';

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
        const { comments, error, wait } = this.props;

        if (wait) {
            return <Spiner />
        }

        if (error) {
            return <p className="text-center">Что-то пошло не так...</p>
        } 

        if (!comments.length) {
            return <button className="btn btn-primary" onClick={this.loadCommnents}>Загрузить</button>
        }

        return comments.map(item => <Comment comment={item} key={+item.id} />)
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.asyncComments.comments,
        error: state.asyncComments.error,
        wait: state.asyncComments.wait,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComments: () => dispatch(requestCommentsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchComments);