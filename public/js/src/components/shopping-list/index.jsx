import React from 'react';

import ShoppingHeader from './partials/header';
import ShoppingForm from './partials/form';
import ShoppingArticles from './partials/article-list';

const ShoppingList = React.createClass({
	displayName: 'ShoppingList',
	render() {
		return (
			<div>
				<ShoppingHeader />
				<ShoppingForm />
				<ShoppingArticles />
			</div>
		);
	}
});

export default ShoppingList;
