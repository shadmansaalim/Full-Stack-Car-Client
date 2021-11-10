import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './FeaturedCar.css';



const FeaturedCar = ({ car }) => {
    const { modelName, bodyType, img, price } = car;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-dark">
                    <Card.Title>{modelName} ({bodyType})</Card.Title>
                    <Card.Text>
                        <small>Drive away from</small>
                        <br />
                        <h4>${price}</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="btn app-main-btn">Book Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default FeaturedCar;