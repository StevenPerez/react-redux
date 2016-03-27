import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

const Layout = React.createClass({
	displayName: 'Layout',
	propTypes: {
		children: React.PropTypes.object
	},
	render() {
		return (
			<div>
				<Navbar inverse className="shopping-navbar">

					<Navbar.Header>
						<Navbar.Brand>
							<span className="glyphicon glyphicon-list shopping-navbar-logo" aria-hidden="true" />
							<a href="#" className="shopping-navbar-brand">REDUX SHOPPING LIST</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav pullRight>
							<li><Link to="/" className="shopping-nav-item">HOME</Link></li>
						</Nav>
					</Navbar.Collapse>

				</Navbar>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Layout;
