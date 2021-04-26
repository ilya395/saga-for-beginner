import React from 'react';
import { Comment } from '../Comment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { requestCommentsAction } from '../../store/actions';
import { Spiner } from '../Spinner';

type IComments = {
    title: string;
    id: number;
}

// interface IComments {
//     title: string;
//     id: number;
// }

// interface IFetchCommentsClass {
//     addComments: () => void,
//     comments: IComments[], 
//     error: boolean, 
//     wait: boolean
// }

type IFetchCommentsClass = {
    addComments: () => void,
    comments: IComments[], 
    error: boolean, 
    wait: boolean
}    

class FetchComments extends React.Component<IFetchCommentsClass> {
    constructor(props: IFetchCommentsClass) {
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

// interface IState {
//     asyncComments: {
//         comments: IComments[],
//         error: boolean,
//         wait: boolean,
//     }
// }

type IState = {
    asyncComments: {
        comments: IComments[],
        error: boolean,
        wait: boolean,
    }    
}

const mapStateToProps = (state: IState) => {
    return {
        comments: state.asyncComments.comments,
        error: state.asyncComments.error,
        wait: state.asyncComments.wait,
    }
}

// interface IMapState<T> {
//     addComment: () => T
// }

// type TMapState = IMapState<() => void>

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addComments: () => dispatch(requestCommentsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchComments);