import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../../Shared/Car/Car';

const FeaturedCars = ({ featuredCars }) => {

    return (

        <div style={{ marginTop: '60px', marginBottom: '120px' }}>
            <h1 className="mb-5 fw-bold" style={{ fontSize: '48px' }}>2021 Featured Cars</h1>
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