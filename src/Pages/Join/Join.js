import React from 'react';
import { Link } from 'react-router-dom';


const Join = () => {
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
                <div className="mb-5">

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingSignUpFirstName" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingSignUpFirstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingSignUpLastName" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingSignUpLastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingSignUpEmail" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingSignUpEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingSignUpPassword" placeholder="Password" required />
                        <label htmlFor="floatingSignUpPassword">Password</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingSignUpRepeatPassword" placeholder="Password" />
                        <label htmlFor="floatingSignUpRepeatPassword">Repeat Password</label>
                    </div>

                </div>
                <button className="btn btn-primary app-main-btn">Create Account</button>
                <div className="text-center mt-3"> <span>Already a member?</span> <Link to="/sign-in">Login</Link> </div>
            </div>
        </div>
    );
};

export default Join;