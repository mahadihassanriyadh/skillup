import React from 'react';
import playstore from '../../images/playstore.png'
import appstore from '../../images/appstore.png'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    const containerStyle = {
        backgroundColor: "#38B6FF"
    }
    return (
        <footer style={containerStyle}>
            <div className="container">
                <Row className="p-5 text-white">
                    <Col lg={6} className="container">
                        <p>Email: contact@skillup.com</p>
                        <p>Phone: +880 9693248004</p>
                        <p>Address: Uttara, Dhaka-1230.</p>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <img className="w-25 rounded m-1" src={playstore} alt="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img className="w-25 rounded m-1 float-right" src={appstore} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;