import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer(['headerStore'])
class PostsHeader extends Component {
  render() {
      return (
        <div>
          <ul className="skip-links">
            <li><a href="#nav">Skip to navigation</a></li>
            <li><a href="#main">Skip to main content</a></li>
          </ul>
          <header role="banner" className="vertical-center">
            <h1 className="text-xs-center">
              {this.props.headerStore.pageTitle}
            </h1>
            <nav role="navigation" id="nav">
              <Link to="/posts" className={this.props.headerStore.menuHomeSelectedClass}>Home</Link>&nbsp;|&nbsp;
              <Link to="/posts/new" className={this.props.headerStore.menuAddAPostSelectedClass}>Add a Post</Link>
            </nav>
          </header>
        </div>
      );
  }
}

export default PostsHeader;
