import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';

const ArticleList = React.createClass({
	displayName: 'ArticleList',
	propTypes: {
		onUpdateArticle: React.PropTypes.func.isRequired,
		onReadArticles: React.PropTypes.func.isRequired,
		onDeleteArticle: React.PropTypes.func.isRequired
	},
	_onAfterSaveCell({article, quantity, cid}, cellName, cellValue) {

		const qty = _.toNumber(quantity);

		if (
			!_.isEmpty(article.trim()) &&
			!_.isNaN(qty) &&
			_.isNumber(qty)
		) {

			this.props.onUpdateArticle({
				article: article.trim(),
				quantity: qty,
				cid: _.toNumber(cid)
			});

		}

		this.props.onReadArticles();

	},
	_deleteArticle({cid}) {
		this.props.onDeleteArticle(_.toNumber(cid));
		this.props.onReadArticles();
	},
	_deleteFormatColumn(cell, row) {
		return (
			<Button bsStyle="warning" onClick={this._deleteArticle.bind(null, row)}>
				<span className="glyphicon glyphicon-trash"/>
			</Button>
		);
	},
	render() {
		const cellEditProp = {
			mode: 'click',
			blurToSave: true,
			afterSaveCell: this._onAfterSaveCell
		};

		const data = _.get(this.props, 'shopping.articles', []);

		return (
			<div>
				<Row>
					<Col md={2} />
					<Col md={8}>
						<BootstrapTable data={data} striped={true} hover={true} pagination={true} search={true} exportCSV={true} cellEdit={cellEditProp}>
							<TableHeaderColumn dataField="cid" isKey={true}  width="70" dataAlign="center" dataSort={true} hidden={true}>id</TableHeaderColumn>
							<TableHeaderColumn dataField="article" dataAlign="left" dataSort={true}>Article</TableHeaderColumn>
							<TableHeaderColumn dataField="quantity" dataAlign="center" width="100" dataSort={true} >Quantity</TableHeaderColumn>
							<TableHeaderColumn dataFormat={this._deleteFormatColumn} dataAlign="center" width="70" editable={false} />
						</BootstrapTable>
					</Col>
					<Col md={2} />
				</Row>
			</div>
		);
	}
});

export default ArticleList;
