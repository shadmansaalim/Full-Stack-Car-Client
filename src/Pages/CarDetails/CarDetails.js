import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Button, Modal } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import './CarDetails.css';


const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <div className="d-flex justify-content-between align-items-center pb-3" style={{
                        borderBottom: '1px solid gray'
                    }}>
                        <h4>Drive away from ${car?.price}</h4>
                        <Button variant="dark" onClick={handleShow}>
                            Book Now
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Provide delivery details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <section class="order-form my-4 mx-4">


                                    <div class="row">
                                        <form class="col-12">

                                            <div class="row mx-4">
                                                <div class="col-12 mb-2">
                                                    <label class="order-form-label">Name</label>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <input class="order-form-input" placeholder="First" />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 mt-sm-0">
                                                    <input class="order-form-input" placeholder="Last" />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Type of thing you want to order</label>
                                                </div>
                                                <div class="col-12">
                                                    <input class="order-form-input" placeholder=" " />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Another type of thing you want to order</label>
                                                </div>
                                                <div class="col-12">
                                                    <input class="order-form-input" placeholder=" " />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Adress</label>
                                                </div>
                                                <div class="col-12">
                                                    <input class="order-form-input" placeholder="Street Address" />
                                                </div>
                                                <div class="col-12 mt-2">
                                                    <input class="order-form-input" placeholder="Street Address Line 2" />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                                                    <input class="order-form-input" placeholder="City" />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                                                    <input class="order-form-input" placeholder="Region" />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                                                    <input class="order-form-input" placeholder="Postal / Zip Code" />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                                                    <input class="order-form-input" placeholder="Country" />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" name="validation" id="validation" value="1" />
                                                        <label for="validation" class="form-check-label">I know what I need to know</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-12">
                                                    <button type="button" id="btnSubmit" class="btn btn-dark d-block mx-auto btn-submit">Submit</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </section>
                            </Modal.Body>
                        </Modal>
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
                            <img className="img-fluid mb-5" src={car?.img} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default CarDetails;