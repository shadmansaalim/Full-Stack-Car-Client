import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Car from '../Shared/Car/Car';
import { useEffect } from 'react';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(cars => setCars(cars))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <section className="my-5">
                    <Row xs={1} md={3} className="g-4">
                        {
                            cars.map(car => <Car
                                key={car.carID}
                                car={car}
                            ></Car>)
                        }
                    </Row>
                </section>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Cars;