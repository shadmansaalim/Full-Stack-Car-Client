import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import HomeBanner from '../HomeBanner/HomeBanner';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews/Reviews';
import { useState } from 'react';
import { useEffect } from 'react';
import CarBuyingExperience from '../CarBuyingExperience/CarBuyingExperience';

const Home = () => {
    const [featuredCars, setFeaturedCars] = useState([]);
    //Cars to display in landing page
    const size = 6;
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/cars?size=${size}`)
            .then(res => res.json())
            .then(cars => setFeaturedCars(cars))

    }, [])



    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            {
                featuredCars.length && reviews.length
                    ?
                    <>
                        <Navigation></Navigation>
                        <HomeBanner></HomeBanner>
                        <Container>
                            <CarBuyingExperience></CarBuyingExperience>
                            <FeaturedCars
                                featuredCars={featuredCars}
                            ></FeaturedCars>
                            <Reviews
                                reviews={reviews}
                            ></Reviews>
                        </Container>
                        <Footer></Footer>
                    </>
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

export default Home;