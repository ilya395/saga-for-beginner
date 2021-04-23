import React, { Component, MouseEvent } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAction } from '../../store/actions';

interface IData {
    title: string;
    id: number;
}

interface IPostFormProps {
    addPost: (arg: IData) => void
}

interface IPostFormState {
    title: string,
}

// export default class PostForm extends React.Component {
class PostForm extends React.Component<IPostFormProps, IPostFormState> {    
    constructor(props: IPostFormProps) {
        super(props)

        this.state = {
            title: '',
        }
    }

    submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const { addPost } = this.props;

        // console.log(this.props)

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

    changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => { // ChangeEvent - FormEvent // React.FormEvent<HTMLInputElement>
        // event.persist();

        const target = event.currentTarget; // event.target;

        this.setState(prev => ({...prev, ...{ 
            [target.name]: target.value
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (object: IData) => dispatch(addPostAction(object)),
    }
}

export default connect(null, mapDispatchToProps)(PostForm);