import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer(['posts', 'headerStore'])
class PostsIndex extends Component {
  componentDidMount() {
    this.props.posts.fetchPosts();
    //console.log(this.props);
    this.props.headerStore.setPageTitle("List of Posts");
    const {path} = this.props.match;
    this.props.headerStore.setSelectedMenu('home',path);
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
          <div className="text-xs-right">
            <Link to="/posts/new" className="btn btn-primary bottom-margin">
              Add a Post
            </Link>
          </div>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>
		  {/* <DevTools /> */}
        </div>
      );
  }
}

export default PostsIndex;
