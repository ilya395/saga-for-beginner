import React from 'react';

import { connect } from 'react-redux';
import { addPostAction } from '../../store/actions';

// export default class PostForm extends React.Component {
class PostForm extends React.Component {    
    constructor(props) {
        super(props)

        this.state = {
            title: '',
        }
    }

    // componentDidMount = () => {
    //     console.log(this.props)
    // }

    // componentDidUpdate =() => {
    //     console.log(this.props)
    // }

    submitHandler = event => {
        event.preventDefault();

        const { addPost } = this.props;

        console.log(this.props)

        const { title } = this.state;

        const newPost = {
            title,
            id: Date.now(), // Date.now().toString()
        }

        addPost(newPost);

        this.setState({
            title: '',
        });
    }

    changeInputHandler = event => {
        // event.persist();
        this.setState(prev => ({...prev, ...{ 
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">
                        Заголовок
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">
                    Создать
                </button>
            </form>
        );
    }
}

// const mapStateToProps = (state) => {
//     return state;
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (object) => dispatch(addPostAction(object)),
    }
}

export default connect(null, mapDispatchToProps)(PostForm);