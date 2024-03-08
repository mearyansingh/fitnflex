import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary flex-grow-0">
				<Container>
					<Navbar.Brand as={Link} to="/" className='fw-bold fs-4'><i className="bi bi-heart-pulse me-2 "></i>Fitinflex</Navbar.Brand>
					<Nav className="ms-auto gap-2 flex-row">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}
export default Header
