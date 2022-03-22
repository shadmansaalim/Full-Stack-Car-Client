import React from 'react';
import './ManageAllOrders.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';
import Order from '../Order/Order';
const ManageAllOrders = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [allOrders, setAllOrders] = useState([]);


    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/allOrders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('carIdToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    swal("Unauthorized User!", "Please Login and Try Again Later", "warning");
                    history.push('/sign-in');
                }
            })
            .then(data => setAllOrders(data));
    }, [user.email])



    const handleDeleteOrder = (id, name) => {
        swal({
            title: "Are you sure?",
            text: `Order of ${name} will be cancelled!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://pure-sands-37131.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingOrders = allOrders.filter(order => order._id !== id);
                                setAllOrders(remainingOrders);
                                swal("Order Cancelled Successfully", {
                                    icon: "success",
                                });
                            }
                        })


                }
            });

    }







    return (
        <div>
            {
                allOrders.length
                    ?
                    <>
                        <h4 className="text-start bg-dark text-white p-3 rounded-3 mt-3 mb-5">Manage All Orders</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="all-orders card">
                                    <div class="table-responsive">
                                        <table class="table no-wrap user-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                                                    <th scope="col" class="border-0 text-uppercase font-medium">User Info</th>
                                                    <th scope="col" class="border-0 text-uppercase font-medium d-none d-md-table-cell">Order Details</th>
                                                    <th scope="col" class="border-0 text-uppercase font-medium d-none d-md-table-cell">Delivery</th>
                                                    <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                                                    <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    allOrders.map((order, index) =>
                                                        <Order
                                                            key={order._id}
                                                            index={index}
                                                            order={order}
                                                            handleDeleteOrder={handleDeleteOrder}
                                                        ></Order>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div class="spinner d-flex align-items-center justify-content-center">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
            }
        </div >
    );
};

export default ManageAllOrders;