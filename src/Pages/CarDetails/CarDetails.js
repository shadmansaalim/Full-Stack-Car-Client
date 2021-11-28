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
        fetch(`https://pure-sands-37131.herokuapp.com/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const onSubmit = data => {
        data.status = "Pending";
        data.modelID = id;
        data.date = date.toLocaleDateString()

        fetch('https://pure-sands-37131.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId || result.modifiedCount) {
                    toast.success('Order Placed Successfully')
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
            {
                car?.img && car?.banner
                    ?
                    <>
                        <Navigation></Navigation>
                        <div style={{
                            backgroundImage: `url(${car?.banner?.startsWith('/') ? `data:image/*;base64,${car.banner}` : car.banner})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '80vh',
                            width: '100%',
                            backgroundSize: '100% 100%'
                        }}>
                        </div>
                        <Container>
                            <div className="mb-5 shadow-lg p-5 bg-white  mx-auto rounded-3" style={{ marginTop: '-130px' }}>
                                <div className="d-flex justify-content-between align-items-center pb-3" style={{
                                    borderBottom: '1px solid gray'
                                }}>
                                    <h4>Drive away from ${car?.price}</h4>
                                    {
                                        car.available === "Available"
                                            ?
                                            <Button variant="dark" onClick={handleShow}>
                                                Book Now
                                            </Button>
                                            :
                                            <Button disabled variant="secondary" onClick={handleShow}>
                                                Out of Stock
                                            </Button>

                                    }

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Provide delivery details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <section className="order-form">
                                                <div className="row">
                                                    <form className="col-12" onSubmit={handleSubmit(onSubmit)}>

                                                        <div className="row mx-4">
                                                            <div className="col-12 mb-2">
                                                                <label className="order-form-label">Name</label>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <input type="text"
                                                                    defaultValue={user?.displayName?.split(' ')[0]}
                                                                    className="order-form-input" placeholder="First" required {...register("firstName")} />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                                                <input type="text"
                                                                    defaultValue={user?.displayName?.split(' ')[1]}
                                                                    className="order-form-input" placeholder="Last" {...register("lastName")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 mx-4">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Email</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="email"
                                                                    defaultValue={user?.email}
                                                                    className="order-form-input" required placeholder=" " {...register("email")} />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3 mx-4">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Phone</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="number"
                                                                    className="order-form-input" required placeholder="Your Number" {...register("phone")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 mx-4">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Car Model</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text"
                                                                    disabled
                                                                    defaultValue={car?.modelName}
                                                                    className="order-form-input" placeholder=" " required {...register("modelName")} />
                                                            </div>
                                                        </div>



                                                        <div className="row mt-3 mx-4">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Address</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text" className="order-form-input" placeholder="Street Address" required {...register("streetAddress")} />
                                                            </div>
                                                            <div className="col-12 mt-2">
                                                                <input type="text" className="order-form-input" placeholder="Street Address Line 2" required {...register("streetAddressLine2")} />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                                                <input type="text" className="order-form-input" placeholder="City" required {...register("city")} />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                                                <input type="text" className="order-form-input" placeholder="Region" required {...register("region")} />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                                                <input type="text" className="order-form-input" placeholder="Zip Code" required {...register("zipCode")} />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                                                <input type="text" className="order-form-input" placeholder="Country" required {...register("country")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3 mx-4">
                                                            <div className="col-12">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" name="validation" id="validation" value="1" required />
                                                                    <label htmlFor="validation" className="form-check-label">I know what I need to know</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <button type="submit" id="btnSubmit" className="btn btn-dark d-block mx-auto btn-submit">Submit</button>
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
                                        <img className="img-fluid mb-5" src={car?.img?.startsWith('/') ? `data:image/*;base64,${car?.img}` : car?.img} alt="" />
                                    </div>
                                </div>
                            </div>
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
        </div >
    );
};

export default CarDetails;