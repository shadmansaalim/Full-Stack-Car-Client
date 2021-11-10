import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import HomeBanner from '../HomeBanner/HomeBanner';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Container>
                <FeaturedCars></FeaturedCars>
            </Container>
        </div>
    );
};

export default Home;