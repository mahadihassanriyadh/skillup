import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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

                        <Row xs={1} md={2} lg={4} className="g-4">
                                <Col>
                                <Link to="/home">
                                    <img className="img-fluid" src={logo} alt="" />
                                </Link>
                                </Col>
                        </Row>
                    </Navbar.Brand>
                    <nav>
                        <NavLink
                            to="/home"
                            activeStyle={activeLinkStyle}
                            className="m-2 fs-5 text-light text-decoration-none p-4"
                        >Home</NavLink>
                        <NavLink
                            to="/courses"
                            activeStyle={activeLinkStyle}
                            className="m-2 fs-5 text-light text-decoration-none p-4"
                        >Courses</NavLink>
                        <NavLink
                            to="/blogs"
                            activeStyle={activeLinkStyle}
                            className="m-2 fs-5 text-light text-decoration-none p-4"
                        >Blogs</NavLink>
                        <NavLink
                            to="/about"
                            activeStyle={activeLinkStyle}
                            className="m-2 fs-5 text-light text-decoration-none p-4"
                        >About</NavLink>
                    </nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;