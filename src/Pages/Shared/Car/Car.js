import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Car.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating';

const Car = ({ car, handleDeleteCar }) => {
    const { _id, modelName, bodyType, img, price, condition, available } = car;
    const { admin } = useAuth();
    const location = useLocation();
    return (
        <Col>
            <Card className="h-100 car shadow">
                <Card.Img className="p-4" variant="top" src={img} />
                <Card.Body className="text-dark p-3">
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
                            <>
                                <div className="text-start mb-2 d-flex align-items-center justify-content-between">

                                    <div>
                                        <button className={
                                            condition === "New"
                                                ?
                                                "btn btn-success rounded-pill "
                                                :
                                                "btn btn-danger rounded-pill "
                                        }>{condition}</button>

                                        <button className="btn btn-dark rounded-pill ms-2">{available}</button>
                                    </div>

                                    <Rating
                                        className="me-1"
                                        initialRating="4.5"
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                        readonly
                                    ></Rating>
                                </div>
                                <Link to={`/car/${_id}`}>
                                    <Button className="btn app-main-btn w-100">
                                        Preview
                                        <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                    </Button>
                                </Link>
                            </>
                    }


                </Card.Footer>
            </Card>
        </Col >
    );
};

export default Car;