import React from 'react';
import './SignIn.css';
import { Button } from 'react-bootstrap';
import googleIcon from '../../images/googleIcon.png';
import facebookIcon from '../../images/facebookIcon.png';
import appleIcon from '../../images/AppleIcon.png';
import emailIcon from '../../images/emailIcon.png';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';




const SignIn = () => {
    const { loginUser, signInWithGoogle,
        signInWithFacebook,
        signInWithTwitter } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});
    const [signInEmail, setSignInEmail] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }



    const emailForm = <div className="shadow-lg rounded-3 col-lg-4 mx-auto p-5" style={{ background: '#f2f2f2' }}>
        <img
            src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
            width="175"
            height="70"
            className="d-inline-block align-top"
            alt="App Logo"
        />
        <h4 className="my-5">Please Login To Continue</h4>
        <form className="mb-4" onSubmit={handleLoginSubmit}>

            <div className="form-floating mb-3">
                <input onBlur={handleOnBlur} name="email" type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com"
                    required />
                <label htmlhtmlFor="floatingLoginEmail">Email address</label>
            </div>

            <div className="form-floating mb-2">
                <input onBlur={handleOnBlur} name="password" type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" required />
                <label htmlhtmlFor="floatingLoginPassword">Password</label>
            </div>
            <div className="mt-4 d-flex justify-content-between">
                <div className="text-start">
                    <button onClick={() => setSignInEmail(false)} className="btn btn-secondary">Previous</button>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-primary app-main-btn">Login</button>
                </div>
            </div>

        </form>
        <div className="text-muted ">
            <p className="mb-3"><small>By clicking Continue, you agree to our <a href="!#">Terms and Conditions</a> and <a href="!#">Privacy Policy</a> and understand that we will create an account linked to your email address.</small></p>
            <p><small>Personal information collection <a href="!#">statement</a></small></p>
        </div>
    </div>




    const allForm = <div className="shadow-lg rounded-3 col-lg-4 mx-auto p-5" style={{ background: '#f2f2f2' }}>
        <img
            src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
            width="175"
            height="70"
            className="d-inline-block align-top"
            alt="App Logo"
        />
        <h4 className="my-5 text-dark">Welcome to CarSales</h4>
        <div>
            <Button onClick={() => signInWithFacebook(location, history)} className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                <img width="24px" className="img-fluid  me-2" src={facebookIcon} alt="Google" />
                <small>Continue With Facebook</small>
            </Button>
            <Button onClick={() => signInWithGoogle(location, history)} className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                <img width="24px" className="img-fluid  me-2" src={googleIcon} alt="Google" />
                <small>Continue With Google</small>
            </Button>
            <Button onClick={() => signInWithGoogle(location, history)} className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
                <img width="24px" className="img-fluid  me-2" src={appleIcon} alt="Google" />
                <small>Continue With Apple</small>
            </Button>

            <Button onClick={() => setSignInEmail(true)} className="rounded-pill sign-in-btn shadow bg-white text-dark mb-4 d-block w-100" size="lg">
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


    return (
        <div className="sign-in d-flex align-items-center justify-content-center text-dark">
            {
                signInEmail
                    ?
                    emailForm
                    :
                    allForm
            }
        </div>
    );
};

export default SignIn;

