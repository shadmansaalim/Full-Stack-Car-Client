import React from 'react';
import './SignIn.css';
import { Button, Modal } from 'react-bootstrap';
import googleIcon from '../../images/googleIcon.png';
import facebookIcon from '../../images/facebookIcon.png';
import appleIcon from '../../images/AppleIcon.png';
import emailIcon from '../../images/emailIcon.png';
import { useState } from 'react';




const SignIn = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="sign-in d-flex align-items-center justify-content-center">
            <div className="shadow-lg rounded-3 col-lg-4 mx-auto p-5" style={{ background: '#f2f2f2' }}>
                <img
                    src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                    width="175"
                    height="70"
                    className="d-inline-block align-top"
                    alt="App Logo"
                />
                <h3 className="my-5">Welcome to CarSales</h3>
                <div>
                    <Button className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                        <img width="24px" className="img-fluid  me-2" src={facebookIcon} alt="Google" />
                        <small>Continue With Facebook</small>
                    </Button>
                    <Button className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                        <img width="24px" className="img-fluid  me-2" src={googleIcon} alt="Google" />
                        <small>Continue With Google</small>
                    </Button>
                    <Button className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                        <img width="24px" className="img-fluid  me-2" src={appleIcon} alt="Google" />
                        <small>Continue With Apple</small>
                    </Button>
                    <Button className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg" onClick={handleShow}>
                        <img width="24px" className="img-fluid me-2" src={emailIcon} alt="Google" />
                        <small>Continue With Email</small>
                    </Button>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Please Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com"
                                        required />
                                    <label htmlFor="floatingLoginEmail">Email address</label>
                                </div>

                                <div className="form-floating mb-5">
                                    <input type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" required />
                                    <label htmlFor="floatingLoginPassword">Password</label>
                                </div>

                                <div class="d-flex justify-content-around align-items-center">

                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"

                                        />
                                        <label class="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Sign In
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="text-muted ">
                    <p className="mb-3"><small>By clicking Continue, you agree to our <a href="!#">Terms and Conditions</a> and <a href="!#">Privacy Policy</a> and understand that we will create an account linked to your email address.</small></p>
                    <p><small>Personal information collection <a href="!#">statement</a></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

