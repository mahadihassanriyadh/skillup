import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png'

const Header = () => {
    const activeLinkStyle = {
        color: "red",
        backgroundColor: "#38B6FF"
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>      
                    <Navbar.Brand>
                        <img className="w-25" src={logo} alt="" />
                    </Navbar.Brand>
                    <nav>
                        <NavLink
                            to="/home"
                            activeStyle={activeLinkStyle}
                            className="m-5 fs-5 text-light text-decoration-none p-4"
                        >Home</NavLink>
                        <NavLink
                            to="/courses"
                            activeStyle={activeLinkStyle}
                            className="m-5 fs-5 text-light text-decoration-none p-4"
                        >Courses</NavLink>
                        <NavLink
                            to="/blogs"
                            activeStyle={activeLinkStyle}
                            className="m-5 fs-5 text-light text-decoration-none p-4"
                        >Blogs</NavLink>
                        <NavLink
                            to="/about"
                            activeStyle={activeLinkStyle}
                            className="m-5 fs-5 text-light text-decoration-none p-4"
                        >About</NavLink>
                    </nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;