import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" >
            <Navbar.Brand><NavLink className="link-style-nav" to="/home">Akash</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><NavLink className="text-light mr-3" to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/aboutMe">About Me</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/myService">My service</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/projects">Projects</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/admin">Admin</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;