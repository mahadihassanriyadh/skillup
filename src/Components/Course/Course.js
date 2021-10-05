import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { name, picture, details, key } = props.course;
    const history = useHistory();
    const handleDetailsButton = () => {
        history.push(`/courses/${key}`);
    }
    return (
        <Col className="my-3">
            <Card className="h-100">
                <Card.Img variant="top" src={picture} />
                <Card.Body title={details}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.split('', 130)} . . .
                    </Card.Text>
                    <Button onClick={handleDetailsButton} className="btn btn-info fw-bold text-white">Details</Button>
                    <Button onClick={handleDetailsButton} className="btn btn-danger fw-bold text-white mx-3">Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;