import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <div style={{
                backgroundImage: `url(${car.banner})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '80vh',
                width: '100%',
                backgroundSize: '100% 100%'
            }}>
            </div>
            <Container>
                <div className="my-5 shadow-lg p-5 bg-white  mx-auto rounded-3">
                    <div className="text-start" style={{
                        borderBottom: '1px solid gray'
                    }}>
                        <h4>Drive away from ${car?.price}</h4>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5 text-start">
                            <div className="mt-5">
                                <h3>{car?.modelName} ({car?.bodyType})</h3>
                                <div className="mt-5 ">
                                    <h5>Available in</h5>
                                    <ul className="mt-3 text-muted">
                                        {car?.availableIn?.map(part => <li>
                                            {part}
                                        </li>)}
                                    </ul>
                                </div>
                                <div className="mt-5 ">
                                    <h5>Features</h5>
                                    <ul className="mt-3 text-muted">
                                        {car?.features?.map(feature => <li>
                                            {feature}
                                        </li>)}
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <h5>Overview</h5>
                                    <small>{car?.overview}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <img className="img-fluid" src={car?.img} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default CarDetails;