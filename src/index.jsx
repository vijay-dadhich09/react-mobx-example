import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import stores from './stores';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';
import PostsNew from './components/posts_new';

render(
	<Provider posts={stores.posts} addPost={stores.addPost}>
		<BrowserRouter>
			<AppContainer>
			  <Switch>
				<Route path='/posts/new' component={PostsNew} />
				<Route path='/posts/:id' component={PostsShow} />
				<Route path="/" component={PostsIndex} />
			  </Switch>
			</AppContainer>
		 </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/posts_index', () => {
    const NextApp = require('./components/posts_index').default;
    render(
      <AppContainer>
		<Provider>
			<NextApp />
		</Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
