import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import FetchComments from './components/FetchComments';

import { connect, useDispatch } from 'react-redux';
import Widget from './components/Widget';
import { useEffect } from 'react';
import { moveModal, openModal } from './store/actions';
import { Action, AnyAction, Dispatch } from 'redux';
import { MOVE_MODAL } from './store/actions/actionTypes';

// import { fetchHelper } from './helpers';
// import { URL_TO_DB } from './constants';

interface IAppProps {
  syncPosts: {
    error: boolean,
    wait: boolean,
    posts: []
  }, 
  asyncPosts: {
    error: boolean,
    wait: boolean,
    fetchedPosts: []
  }, 
  asyncComments: {
    error: boolean,
    wait: boolean,
    comments: []
  },
  modal: {
    modal: boolean
  },
  openModalPlz: () => () => void
}

function App(props: IAppProps) {
  const { syncPosts, asyncPosts, asyncComments } = props;

  // const { posts } = syncPosts;

  const { wait } = asyncPosts;

  // const dispatch = useDispatch();

  useEffect(() => {
    const { openModalPlz } = props;
    openModalPlz();
  }, []);

  return (
    <div className="container pt-3">

      {
        props.modal.modal === true 
          ? <Widget />
          : <></>
      }

      <div className="row">
        <div className="col pb-3">
          <PostForm />
        </div>
      </div>

      <div className="row"> 
        <div className="col col-md-6 pb-3">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col col-md-6 pb-3">
          <h2>Асинхронные посты{ wait === true ? ` - Загружаем...` : '' }</h2>
          <FetchedPosts />
        </div>
      </div>

      <div className="row">
        <div className="col col-md-6 pb-3">
          <h2>Асинхронные комменты</h2>
          <FetchComments />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IAppProps) => {
  return state;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    openModalPlz: () => dispatch({ type: MOVE_MODAL })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
