import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MyOrder = ({ order }) => {
    console.log(order);
    const [car, setCar] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/car/${order.modelID}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [order.modelID])

    return (
        <div className="col">
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="!#" className="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;