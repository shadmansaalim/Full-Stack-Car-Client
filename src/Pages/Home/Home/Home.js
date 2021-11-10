import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import HomeBanner from '../HomeBanner/HomeBanner';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Container>
                <FeaturedCars></FeaturedCars>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;