import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
    const { user } = useAuth();
    return (
        <Navbar className="text-dark" sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                        width="130"
                        height="40"
                        className="d-inline-block align-top"
                        alt="App Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="text-decoration-none me-lg-3" exact to="/cars"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#0275d8"
                            }}>Cars</NavLink>
                        {
                            user.email
                                ?
                                <div className="d-flex align-items-center">
                                    <p className="m-0 me-3">{user.displayName}</p>
                                    <FontAwesomeIcon className="fs-4" icon={faUser} />
                                </div>
                                :
                                <>
                                    <NavLink className="text-decoration-none me-lg-3" exact to="/sign-in"
                                        style={{ color: '#161c2d' }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#0275d8"
                                        }}>Sign In</NavLink>
                                    <NavLink className="text-decoration-none" exact to="/join"
                                        style={{ color: '#161c2d' }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#0275d8"
                                        }}>Join</NavLink>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;