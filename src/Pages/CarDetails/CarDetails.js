import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import { Container, Button, Modal } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import './CarDetails.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const date = new Date();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const onSubmit = data => {
        data.status = "Pending";
        data.modelID = id;
        data.date = date.toLocaleDateString()

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Order Place Successfully')
                    handleClose();
                    reset();

                }
            })
            .catch(error => {
                alert('Something went wrong')
            })
    }

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
                                        <form class="col-12" onSubmit={handleSubmit(onSubmit)}>

                                            <div class="row mx-4">
                                                <div class="col-12 mb-2">
                                                    <label class="order-form-label">Name</label>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <input type="text"
                                                        defaultValue={user?.displayName?.split(' ')[0]}
                                                        class="order-form-input" placeholder="First" required {...register("firstName")} />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 mt-sm-0">
                                                    <input type="text"
                                                        defaultValue={user?.displayName?.split(' ')[1]}
                                                        class="order-form-input" placeholder="Last" required {...register("lastName")} />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Email</label>
                                                </div>
                                                <div class="col-12">
                                                    <input type="email"
                                                        defaultValue={user?.email}
                                                        class="order-form-input" required placeholder=" " {...register("email")} />
                                                </div>
                                            </div>
                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Phone</label>
                                                </div>
                                                <div class="col-12">
                                                    <input type="number"
                                                        class="order-form-input" required placeholder="Your Number" {...register("phone")} />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Car Model</label>
                                                </div>
                                                <div class="col-12">
                                                    <input type="text"
                                                        disabled
                                                        defaultValue={car?.modelName}
                                                        class="order-form-input" placeholder=" " required {...register("modelName")} />
                                                </div>
                                            </div>



                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <label class="order-form-label">Address</label>
                                                </div>
                                                <div class="col-12">
                                                    <input type="text" class="order-form-input" placeholder="Street Address" required {...register("streetAddress")} />
                                                </div>
                                                <div class="col-12 mt-2">
                                                    <input type="text" class="order-form-input" placeholder="Street Address Line 2" required {...register("streetAddressLine2")} />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                                                    <input type="text" class="order-form-input" placeholder="City" required {...register("city")} />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                                                    <input type="text" class="order-form-input" placeholder="Region" required {...register("region")} />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                                                    <input type="text" class="order-form-input" placeholder="Zip Code" required {...register("zipCode")} />
                                                </div>
                                                <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                                                    <input type="text" class="order-form-input" placeholder="Country" required {...register("country")} />
                                                </div>
                                            </div>

                                            <div class="row mt-3 mx-4">
                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" name="validation" id="validation" value="1" required />
                                                        <label for="validation" class="form-check-label">I know what I need to know</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-12">
                                                    <button type="submit" id="btnSubmit" class="btn btn-dark d-block mx-auto btn-submit">Submit</button>
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