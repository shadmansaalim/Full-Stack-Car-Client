import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import HomeBanner from '../HomeBanner/HomeBanner';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Container>
                <FeaturedCars></FeaturedCars>
                <Reviews></Reviews>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;