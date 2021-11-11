import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Car.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';


const Car = ({ car, handleDeleteCar }) => {
    const { _id, modelName, bodyType, img, price } = car;
    const { admin } = useAuth();
    const location = useLocation();
    console.log(location);
    return (
        <Col>
            <Card className="h-100 car">
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
                    {
                        (admin && location?.pathname === "/dashboard/manage-cars")
                            ?
                            <>
                                <Button className="btn btn-dark ms-2">Edit <FontAwesomeIcon icon={faEdit} /></Button>
                                <Button onClick={() => handleDeleteCar(_id)} className="btn btn-danger ms-2">Remove <FontAwesomeIcon icon={faTrash} /></Button>
                            </>
                            :
                            <Link to={`/car/${_id}`}>
                                <Button className="btn app-main-btn">Preview</Button>
                            </Link>
                    }

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Car;