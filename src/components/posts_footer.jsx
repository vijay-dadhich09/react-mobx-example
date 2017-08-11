import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostsFooter extends Component {
  componentDidMount() {
    //this.props.posts.fetchPosts();
  }

  render() {
      return (
        <footer role="contentinfo">
          <span>Posted by: Vijay Dadhich</span><br/>
          <span>Contact information: <a href="mailto:vdadhich@sapient.com">vdadhich@sapient.com</a>.</span>
        </footer>
      );
  }
}

export default PostsFooter;
