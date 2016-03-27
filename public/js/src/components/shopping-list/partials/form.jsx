import React from 'react';
import {Grid, Row, Col, Input, Button} from 'react-bootstrap';

const ShoppingForm = React.createClass({
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
						/>
					</Col>
					<Col md={1}>
						<Input
							type="number"
							placeholder="Qty"
							ref="quantity"
						/>
					</Col>
					<Col md={2}>
						<Button bsStyle="success" block>Save</Button>
					</Col>
					<Col md={3} />
				</Row>
				<hr />
			</Grid>
		);
	}
});

export default ShoppingForm;
