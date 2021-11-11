import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const Join = () => {
    const [signUpData, setSignUpData] = useState({});
    const { registerUser } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignUpData = { ...signUpData };
        newSignUpData[field] = value;
        setSignUpData(newSignUpData);
    }

    const handleSignUpSubmit = e => {
        if (signUpData.password !== signUpData.password2) {
            swal("Passwords doesn't match!", "Please check password and then try again", "error");
        }
        else {
            registerUser(signUpData.firstName, signUpData.lastName, signUpData.email, signUpData.password, history);
            e.target.reset();
        }

        e.preventDefault();

    }

    return (
        <div className="sign-in d-flex align-items-center justify-content-center text-dark">
            <div className="shadow-lg rounded-3 col-lg-4 mx-auto p-5" style={{ background: '#f2f2f2' }}>
                <img
                    src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                    width="175"
                    height="70"
                    className="d-inline-block align-top"
                    alt="App Logo"
                />
                <h4 className="my-4">Create an Account to Continue</h4>
                <form className="mb-3" onSubmit={handleSignUpSubmit} >

                    <div className="form-floating mb-3">
                        <input
                            onBlur={handleOnBlur}
                            name="firstName"
                            type="text" className="form-control" id="floatingSignUpFirstName" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingSignUpFirstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            onBlur={handleOnBlur}
                            name="lastName"
                            type="text" className="form-control" id="floatingSignUpLastName" placeholder="name@example.com"
                            defaultValue=""
                        />
                        <label htmlFor="floatingSignUpLastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            onBlur={handleOnBlur}
                            name="email"
                            type="email" className="form-control" id="floatingSignUpEmail" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingSignUpEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            onBlur={handleOnBlur}
                            name="password"
                            type="password" className="form-control" id="floatingSignUpPassword" placeholder="Password" required />
                        <label htmlFor="floatingSignUpPassword">Password</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            onBlur={handleOnBlur}
                            name="password2"
                            type="password" className="form-control" id="floatingSignUpRepeatPassword" placeholder="Password" />
                        <label htmlFor="floatingSignUpRepeatPassword">Repeat Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary app-main-btn mt-3">Create Account</button>
                </form>
                <div className="text-center mt-3"> <span>Already a member?</span> <Link to="/sign-in">Login</Link> </div>
            </div>
        </div>
    );
};

export default Join;