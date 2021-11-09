import React from 'react';
import './HomeBanner.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <div className="home-banner d-flex align-items-center justify-content-center">
            <Form className="col-lg-6 mx-auto p-5 shadow-lg text-white rounded-3" style={{ background: 'rgba(0,0,0,.7)' }}>
                <div className="row d-flex align-items-center mb-4">
                    <h3 className="col-lg-6 m-0">Find your next car</h3>
                    <div className="col-lg-6">
                        <Button className="app-main-btn rounded-pill me-2 px-4" >All</Button>
                        <Button className="app-main-btn rounded-pill me-2 px-4" >New</Button>
                        <Button className="app-main-btn rounded-pill px-4" >Used</Button>
                    </div>
                </div>
                <div className="mb-4">
                    <h5>24-hr test drive</h5>
                    <h5>30-day returns (up to 1500 mi)</h5>
                </div>
                <div>
                    <Button className="app-main-btn rounded-pill" size="lg">Show me 154,545 cars</Button>
                    <br />
                    <small>Everything you auto know</small>
                </div>
            </Form>
        </div >
    );
};

export default HomeBanner;