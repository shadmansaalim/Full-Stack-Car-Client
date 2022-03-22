import React from 'react';
import { Link } from 'react-router-dom';
const NewCars = () => {
    return (
        <div className="p-5" style={{ background: '#f8f8f8' }}>
            <h2>Control Your Car-Buying Experience</h2>
            <p>At CarSales, you're in charge of the process from start to finish. Here's how.</p>
            <div className="row d-flex align-items-center">
                <div className="col-lg-5 mx-auto">
                    <img src="https://consumer.tcimg.net/assets/21-11/module-1-img-eb61fa2b3227fb090f6065132ff221bb.svg" alt="" />
                </div>
                <div className="col-lg-5 mx-auto text-start">
                    <h3>Build Your Deal With Confidence</h3>
                    <p>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>
                    <Link to="/cars/new-cars">
                        <button className="mt-3 btn app-main-btn text-white rounded-pill">Shop New cars</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewCars;