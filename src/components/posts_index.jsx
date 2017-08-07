import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer(['posts'])
class PostsIndex extends Component {
  componentDidMount() {
    this.props.posts.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts.posts, post => {
      if (post.title == null) return;
      const linkTo = `/posts/${post.id}`;
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    })
  }
  render() {
      return (
        <div>
          <div className="text-xs-center">
            <Link to="/posts/new" className="btn btn-primary">
              Add a Post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
		  <DevTools />
        </div>
      );
  }
}

export default PostsIndex;
