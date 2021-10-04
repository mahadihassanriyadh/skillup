
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeCourseDisplay = (props) => {
    const { name, picture, details } = props.course;
    return (
        
        <Col>
            <Card className="my-3">
            <Card.Img variant="top" src={picture} />
            <Card.Body title={details}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {details.split('', 130)} . . .
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeCourseDisplay;