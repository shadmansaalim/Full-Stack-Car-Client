import React from 'react';
import './HomeBanner.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const HomeBanner = () => {
    const [condition, setCondition] = useState("All");
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars?condition=${condition}`)
            .then(res => res.json())
            .then(cars => setCars(cars))
    }, [condition])
    return (
        <div className="home-banner d-flex align-items-center justify-content-center">
            <Form className="col-lg-6 mx-auto p-5 shadow-lg text-white rounded-3" style={{ background: 'rgba(0,0,0,.7)' }}>
                <div className="row d-flex align-items-center mb-4">
                    <h3 className="col-lg-6 m-0">Find your next car</h3>

                    <div className="col-lg-6 mx-auto btn-group mt-3 mt-lg-0" role="group" aria-label="Basic radio toggle button group">
                        <label onClick={() => setCondition("All")} class={condition === "All" ? "btn app-main-btn active rounded-pill me-2 px-4 py-1" : "btn app-outline-btn rounded-pill me-2 px-4 py-1"} for="all">
                            All
                            <input type="radio" class="btn-check" name="condition" id="all" autocomplete="off" checked />
                        </label>
                        <label onClick={() => setCondition("New")} class={condition === "New" ? "btn app-main-btn active rounded-pill me-2 px-4 py-1" : "btn app-outline-btn rounded-pill me-2 px-4 py-1"} for="new">New
                            <input type="radio" class="btn-check" name="condition" id="new" autocomplete="off" />
                        </label>
                        <label onClick={() => setCondition("Used")} class={condition === "Used" ? "btn app-main-btn active rounded-pill px-4 py-1" : "btn app-outline-btn rounded-pill px-4 py-1"} for="used">Used
                            <input type="radio" class="btn-check" name="condition" id="used" autocomplete="off" />
                        </label>
                    </div>

                </div>
                <div className="mb-4">
                    <h5>24-hr test drive</h5>
                    <h5>30-day returns (up to 1500 mi)</h5>
                </div>
                <div>
                    <Link to={condition === "All" ? "/cars/All" : condition === "New" ? "/cars/New" : "/cars/Used"}>
                        {
                            cars?.length
                                ?
                                <Button className="app-main-btn rounded-pill" size="lg">Show me {cars?.length} cars</Button>
                                :
                                <Button className="app-main-btn rounded-pill" size="lg" disabled>
                                    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading...
                                </Button>

                        }
                    </Link>
                    <br />
                    <small>Everything you auto know</small>
                </div>
            </Form>
        </div >
    );
};

export default HomeBanner;