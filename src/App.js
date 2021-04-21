import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import FetchComments from './components/FetchComments';

import { connect } from 'react-redux';

// import { fetchHelper } from './helpers';
// import { URL_TO_DB } from './constants';

function App(props) {
  const { syncPosts, asyncPosts, asyncComments } = props;

  const { posts } = syncPosts;

  const { fetchedPosts, wait } = asyncPosts;

  const { comments } = asyncComments

  // console.log(props);

  return (
    <div className="container pt-3">

      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>

      <div className="row"> 
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={posts} />
        </div>
        <div className="col">
          <h2>Асинхронные посты{ wait === true ? ` - Загружаем...` : '' }</h2>
          <FetchedPosts posts={fetchedPosts} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2>Асинхронные комменты</h2>
          <FetchComments comments={comments} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);
