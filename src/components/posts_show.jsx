import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer(['posts', 'headerStore'])
class PostsShow extends Component {
//
  componentDidMount () {
    const { id } = this.props.match.params;
    this.props.posts.fetchPostById(id);
    this.props.headerStore.setPageTitle('Post');
    const {path} = this.props.match;
    this.props.headerStore.setSelectedMenu('home',path);
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.posts.deletePost(id,() => {
      this.props.history.push("/");
    })
  }
  render() {
	const { id } = this.props.match.params;
	const post = this.props.posts.posts ? this.props.posts.posts[id] : null;
    if(!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
      <Link to="/">Back to index></Link>
      <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
      Delete Post
      </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default PostsShow;
