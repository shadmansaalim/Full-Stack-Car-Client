import React from 'react';
import { Link } from 'react-router-dom';
const UsedCars = () => {
    return (
        <div className="p-5">
            <div className="row d-flex align-items-center">
                <div className="col-lg-5 mx-auto text-start order-2 order-lg-1">
                    <h3>Choose From Close to a Million Used Cars</h3>
                    <p>Get access to our extensive selection of pre-owned vehicles for sale across the US, and see price ratings based on similar used car listings in your area, so you know when you’re getting a great deal.</p>
                    <Link to="/cars/used-cars">
                        <button className="mt-3 btn app-main-btn text-white rounded-pill">Shop Used cars</button>
                    </Link>
                </div>
                <div className="col-lg-5 mx-auto order-1 order-lg-2">
                    <img src="https://consumer.tcimg.net/assets/_next/static/images/module-2-img-6ae2bdf81c2f1d21853078ade4e0bb27.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default UsedCars;