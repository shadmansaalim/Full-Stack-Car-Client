import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews/Reviews';
import { useState } from 'react';
import { useEffect } from 'react';
import NewCars from '../NewCars/NewCars';
import UsedCars from '../UsedCars/UsedCars';
import SellCar from '../SellCar/SellCar';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pure-sands-37131.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            {
                reviews.length
                    ?
                    <>
                        <Navigation></Navigation>
                        <HomeBanner></HomeBanner>
                        <NewCars></NewCars>
                        <UsedCars></UsedCars>
                        <SellCar></SellCar>
                        <Container fluid>
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