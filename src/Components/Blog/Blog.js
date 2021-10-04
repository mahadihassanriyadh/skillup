import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    const { title, picture, details } = props.blog;
    console.log(title)
    return (
        <Col>
            <Card className="my-3">
            <Card.Img variant="top" src={picture} />
            <Card.Body title={details}>
                    <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.split('', 130)} . . .
                </Card.Text>
                <Button className="btn btn-info fw-bold text-white">Details</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;