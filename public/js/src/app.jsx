import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {store, history} from './store';

import App from './components/main';
import ShoppingList from './components/shopping-list';
import NotFound from './components/not-found';

render((
		<Provider store={store}>
			<Router history={history}>
				<Route component={App} path="/">
					<IndexRoute component={ShoppingList} />
					<Route component={ShoppingList} path="shopping" />
				</Route>
				<Route component={NotFound} path="*"/>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);
