import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../../Shared/Car/Car';

const FeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = useState([]);
    //Cars to display in landing page
    const size = 6;

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/cars?size=${size}`)
            .then(res => res.json())
            .then(cars => setFeaturedCars(cars))

    }, [])
    return (
        <div className="my-5">
            <h2 className="text-start mb-4">Featured Cars</h2>
            {
                <Row xs={1} md={3} className="g-4">
                    {
                        featuredCars.map(car => <Car
                            key={car._id}
                            car={car}
                        >
                        </Car>)
                    }
                </Row>
            }
        </div>
    );
};

export default FeaturedCars;