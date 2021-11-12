import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const MyOrder = ({ order, handleDeleteOrder }) => {
    console.log(order);
    const [car, setCar] = useState({});

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/car/${order.modelID}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [order.modelID])


    return (
        <div class="col">
            <div class="card h-100">
                <img src={car.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{car.modelName}</h5>
                    <div class="card-text text-start mt-3">
                        <span className="d-flex align-items-center justify-content-between">
                            <h5 className="m-0">Order Details</h5>
                            <div>
                                <FontAwesomeIcon className="fs-4 me-2 text-dark" icon={faEdit} />
                                <FontAwesomeIcon onClick={() => {
                                    handleDeleteOrder(order._id)
                                }} className="fs-4 text-danger" icon={faTrash} />
                            </div>
                        </span>
                        <hr />
                        <div className="mt-3">
                            <p className="mb-2">Name : {order.firstName + " " + order.lastName}</p>
                            <p className="mb-2">Email : {order.email}</p>
                            <p className="mb-2">Phone : {order.phone}</p>
                            <p className="mb-2">Address : {order.streetAddress}, {order.streetAddressLine2}, {order.zipCode}, {order.region}, {order.city}, {order.country}</p>
                            <p className="mb-2">Quantity : {order.quantity}</p>
                            <p className="mb-2">Ordered Date : {order.date}</p>
                            {/* <p className="mb-2">Estimated Delivery : {order.date}</p> */}
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex align-items-center">
                    <button className="btn btn app-main-btn text-white" disabled>{order.status}</button>

                </div>
            </div>
        </div>
    );
};

export default MyOrder;