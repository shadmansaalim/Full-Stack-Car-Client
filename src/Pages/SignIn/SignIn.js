import React from 'react';
import './SignIn.css';
import { Button } from 'react-bootstrap';
import googleIcon from '../../images/googleIcon.png';
import facebookIcon from '../../images/facebookIcon.png';
import appleIcon from '../../images/AppleIcon.png';
import emailIcon from '../../images/emailIcon.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const SignIn = () => {
    const history = useHistory();
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
                <h4 className="my-5 text-dark">Welcome to CarSales</h4>
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
                    <Button onClick={() => history.replace('/sign-in/email')} className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                        <img width="24px" className="img-fluid me-2" src={emailIcon} alt="Google" />
                        <small>Continue With Email</small>
                    </Button>

                    <p className="small fw-bold my-3 text-dark">Don't have an account? <Link to="/join"
                        className="link-danger">Create Now</Link></p>

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

