import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createArticle, readArticles, updateArticle, deleteArticle} from '../../actions/shopping';

import ShoppingHeader from './partials/header';
import ShoppingForm from './partials/form';
import ShoppingArticles from './partials/article-list';

const ShoppingList = React.createClass({
	displayName: 'ShoppingList',
	propTypes: {
		shopping: React.PropTypes.object.isRequired,
		onCreateArticle: React.PropTypes.func.isRequired,
		onReadArticles: React.PropTypes.func.isRequired,
		onUpdateArticle: React.PropTypes.func.isRequired,
		onDeleteArticle: React.PropTypes.func.isRequired
	},
	componentWillMount() {
		this.props.onReadArticles();
	},
	render() {
		return (
			<div>
				<ShoppingHeader />
				<ShoppingForm {...this.props} />
				<ShoppingArticles {...this.props} />
			</div>
		);
	}
});

const mapStateToProps = (state) => {
	return {
		shopping: _.get(state, 'shopping', {})
	};
};

//createArticle, readArticles, updateArticle, deleteArticle
const mapDispatchToProps = (dispatch) => {
	return {
		onCreateArticle(article) {
			dispatch(createArticle(article));
		},
		onReadArticles() {
			dispatch(readArticles());
		},
		onUpdateArticle(article) {
			dispatch(updateArticle(article));
		},
		onDeleteArticle(cid) {
			dispatch(deleteArticle(cid));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
