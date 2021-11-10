import React from 'react';
import './SignIn.css';



const SignInEmail = () => {
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
                <h4 className="my-5">Please Login To Continue</h4>
                <div className="mb-4">

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingLoginEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" required />
                        <label htmlFor="floatingLoginPassword">Password</label>
                    </div>

                    <div className="mt-3 text-end">
                        <button className="btn btn-primary app-main-btn">Login</button>
                    </div>

                </div>
                <div className="text-muted ">
                    <p className="mb-3"><small>By clicking Continue, you agree to our <a href="!#">Terms and Conditions</a> and <a href="!#">Privacy Policy</a> and understand that we will create an account linked to your email address.</small></p>
                    <p><small>Personal information collection <a href="!#">statement</a></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignInEmail;