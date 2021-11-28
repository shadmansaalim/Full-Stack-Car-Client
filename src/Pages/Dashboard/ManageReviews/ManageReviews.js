import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { Container, Row } from 'react-bootstrap';
import Review from '../../Home/Reviews/Review/Review';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(cars => setReviews(cars))
    }, [])

    const handleDeleteReview = id => {
        swal({
            title: "Are you sure?",
            text: `Review will be removed from website`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://pure-sands-37131.herokuapp.com/reviews/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingReviews = reviews.filter(review => review._id !== id);
                                setReviews(remainingReviews);
                            }
                        })
                    swal("Review Removed Successfully", {
                        icon: "success",
                    });

                }
            });
    }
    return (
        <div>
            {
                reviews.length
                    ?
                    <Container className="mt-4">
                        <section className="my-5">
                            <Row xs={1} lg={2} xl={3} className="g-4">
                                {
                                    reviews.map(review => <Review
                                        key={review._id}
                                        review={review}
                                        handleDeleteReview={handleDeleteReview}
                                    ></Review>)
                                }
                            </Row>
                        </section>
                    </Container>
                    :
                    <div class="spinner d-flex align-items-center justify-content-center">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
            }
        </div>
    );

};

export default ManageReviews;