import React from 'react';
import Review from '../Review/Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Review.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Reviews = ({ reviews }) => {

    return (
        <div className="p-4 mb-5">
            <h1 className="fw-bold mb-5" style={{ fontSize: '42px' }}>Customer Feedbacks</h1>

            <Slider {...settings}>

                {
                    reviews.map(review => <Review
                        review={review}
                    >
                    </Review>)
                }

            </Slider>

        </div >

    );
};

export default Reviews;