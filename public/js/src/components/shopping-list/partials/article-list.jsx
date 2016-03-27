import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const data = [{
	"id": 1,
	"Article": "Nefazodone Hydrochloride",
	"Quantity": 74
}, {
	"id": 2,
	"Article": "Benzalkonium chloride",
	"Quantity": 30
}, {
	"id": 3,
	"Article": "Ascorbic Aid, Cholecalciferol, Alpha-Tocopherol, Thiamine, Riboflavin, Niacinamide, Pyridoxine, Folic Aid, Cobalamin, Biotin, Pantothenic Aid, Zinc, Selenium",
	"Quantity": 63
}, {
	"id": 4,
	"Article": "Ibuprofen",
	"Quantity": 14
}, {
	"id": 5,
	"Article": "Donepezil Hydrochloride",
	"Quantity": 17
}, {
	"id": 6,
	"Article": "Triclosan",
	"Quantity": 52
}, {
	"id": 7,
	"Article": "TOLNAFTATE",
	"Quantity": 88
}, {
	"id": 8,
	"Article": "Baclofen",
	"Quantity": 64
}, {
	"id": 9,
	"Article": "Cetirizine HCl",
	"Quantity": 43
}, {
	"id": 10,
	"Article": "Chamomilla, Myrrha, Rosmarinus, Ruta, Symphytum, Antimon Tart, RSV.",
	"Quantity": 30
}, {
	"id": 11,
	"Article": "Chloroxylenol",
	"Quantity": 19
}, {
	"id": 12,
	"Article": "TIZANIDINE HYDROCHLORIDE",
	"Quantity": 33
}, {
	"id": 13,
	"Article": "Salicylic Aid",
	"Quantity": 13
}, {
	"id": 14,
	"Article": "Omeprazole",
	"Quantity": 66
}, {
	"id": 15,
	"Article": "estradiol",
	"Quantity": 32
}];

const ArticleList = React.createClass({
	displayName: 'ArticleList',
	_onAfterSaveCell(row, cellName, cellValue) {
		console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
		console.log("Thw whole row :");
		console.log(row);
	},
	_deleteFormatColumn(cell, row) {
		return (
			<Button bsStyle="warning" onClick={this._deleteArticle.bind(null, row)}>
				<span className="glyphicon glyphicon-trash"/>
			</Button>
		);
	},
	_deleteArticle(article) {
		console.log(article);
	},
	render() {
		const cellEditProp = {
			mode: 'click',
			blurToSave: true,
			afterSaveCell: this.onAfterSaveCell
		};

		return (
			<div>
				<Row>
					<Col md={2} />
					<Col md={8}>
						<BootstrapTable data={data} striped={true} hover={true} pagination={true} search={true} exportCSV={true} cellEdit={cellEditProp}>
							<TableHeaderColumn dataField="id" isKey={true}  width="70" dataAlign="center" dataSort={true}>id</TableHeaderColumn>
							<TableHeaderColumn dataField="Article" dataAlign="left" dataSort={true}>Article</TableHeaderColumn>
							<TableHeaderColumn dataField="Quantity" dataAlign="center" width="100" dataSort={true} >Quantity</TableHeaderColumn>
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
