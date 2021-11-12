import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { Container, Row } from 'react-bootstrap';
import Review from '../../Home/Reviews/Review/Review';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
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
                    const url = `http://localhost:5000/reviews/${id}`;
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
        <div className="mt-4">
            <Container>
                <section className="my-5">
                    <Row xs={1} md={3} className="g-4">
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
        </div>
    );

};

export default ManageReviews;