import React from 'react';
import {Grid, Row, Col, Input, Button} from 'react-bootstrap';
import _ from 'lodash';

const ShoppingForm = React.createClass({
	displayName: 'ShoppingForm',
	propTypes: {
		onCreateArticle: React.PropTypes.func.isRequired,
		onReadArticles: React.PropTypes.func.isRequired,
	},
	getInitialState() {
		return {
			article: '',
			quantity: ''
		};
	},
	_save() {
		const {article, quantity} = this.refs;
		if (
			!_.isEmpty(article.getValue().trim()) &&
			!_.isEmpty(quantity.getValue().trim())
		) {

			this.props.onCreateArticle({
				article: article.getValue().trim(),
				quantity: _.toNumber(quantity.getValue().trim())
			});

			this.props.onReadArticles();

			this.setState({ article: '', quantity: ''});
		}
	},
	render() {
		return (
			<Grid>
				<Row>
					<Col md={3} />
					<Col md={3}>
						<Input
							type="text"
							placeholder="Article name"
							ref="article"
							onChange={() => this.setState({article: this.refs.article.getValue()})}
							value={this.state.article}
						/>
					</Col>
					<Col md={1}>
						<Input
							type="number"
							placeholder="Qty"
							ref="quantity"
							onChange={() => this.setState({quantity: this.refs.quantity.getValue()})}
							value={this.state.quantity}
						/>
					</Col>
					<Col md={2}>
						<Button bsStyle="success" block onClick={this._save}>Save</Button>
					</Col>
					<Col md={3} />
				</Row>
				<hr />
			</Grid>
		);
	}
});

export default ShoppingForm;
