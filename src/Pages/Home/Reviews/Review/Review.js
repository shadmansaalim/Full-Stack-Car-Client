import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


const Review = ({ review, handleDeleteReview }) => {
    const location = useLocation();

    return (
        <Col>
            <Card style={{ minHeight: '300px', maxHeight: '300px', overflow: 'scroll' }} className="mx-2">
                <Card.Body>
                    <div className="d-flex align-items-center text-start">
                        {
                            review.photoURL
                                ?
                                <img className="img-fluid rounded-circle" src={review.photoURL} alt="" style={{ width: 48, height: 48 }}></img>
                                :
                                <FontAwesomeIcon className="text-secondary" icon={faUserCircle} style={{ width: 48, height: 48 }} />

                        }
                        <Card.Title className="ms-3">
                            <small className="m-0">{review.name}</small>
                            <br />
                            <Rating
                                className="me-1"
                                initialRating={review.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            ></Rating>
                        </Card.Title>

                        {
                            location.pathname === '/dashboard/manage-reviews'
                            &&
                            <>
                                <button onClick={() => {
                                    handleDeleteReview(review._id)
                                }} type="button" class="btn btn-outline-danger btn-circle btn-lg btn-circle ms-auto"><i class="fa fa-trash"></i> </button>

                            </>
                        }
                    </div>
                    <hr />
                    <Card.Text>
                        {review.review}
                    </Card.Text>
                </Card.Body>
            </Card></Col>
    );
};

export default Review;