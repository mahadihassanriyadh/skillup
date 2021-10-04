import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
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
                <Button className="btn btn-info fw-bold text-white">Details</Button>
                <Button className="btn btn-danger fw-bold text-white mx-3">Enroll Now</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;