import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand as={Link} to="/" className='fw-bold fs-4'><i className="bi bi-heart-pulse me-2 "></i>Fitnflex</Navbar.Brand>
					<Nav className="ms-auto gap-2 flex-row">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/exercise/123">Features</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	)
}
export default Header
