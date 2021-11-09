import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                        width="130"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cars">Cars</Nav.Link>
                        <Nav.Link href="/sign-in">Sign In</Nav.Link>
                        <Nav.Link href="/join">Join</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;