import { watchPosts } from './watchPosts';
import { watchComments } from './watchComments';

export function* rootSaga() {
    yield [
        watchPosts,
        watchComments
    ]
}