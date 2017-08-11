import posts from './posts';
import addPost from './add_post_store';
import HeaderStore from './header_store';

const stores = {
    posts: posts,
    addPost: addPost,
    headerStore: new HeaderStore(),
};

export default stores;