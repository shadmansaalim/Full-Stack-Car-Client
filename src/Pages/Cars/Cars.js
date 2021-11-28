import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Car from '../Shared/Car/Car';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cars = () => {
    const { condition } = useParams();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/cars?condition=${condition}`)
            .then(res => res.json())
            .then(cars => setCars(cars))
    }, [condition])
    return (
        <div>
            {
                cars.length
                    ?
                    <>
                        <Navigation></Navigation>
                        <Container>
                            <section className="my-5">
                                <Row xs={1} md={2} xl={3} className="g-4">
                                    {
                                        cars.map(car => <Car
                                            key={car._id}
                                            car={car}
                                        ></Car>)
                                    }
                                </Row>
                            </section>
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

export default Cars;