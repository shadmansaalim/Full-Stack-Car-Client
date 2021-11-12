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
        fetch(`http://localhost:5000/allOrders?email=${user.email}`, {
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
    }, [])


    /*

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
                    const url = `https://eerie-blood-54641.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingOrders = allOrders.filter(order => order._id !== id);
                                setAllOrders(remainingOrders);


                            }
                        })
                    swal("Order Cancelled Successfully", {
                        icon: "success",
                    });

                }
            });

    }

    const updateOrderStatus = (e, id) => {
        const updatedStatus = e.target.value;
        console.log(updatedStatus);
        swal({
            title: "Are you sure?",
            text: `Order Status will be updated to ${updatedStatus}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    const url = `https://eerie-blood-54641.herokuapp.com/ordersUpdate/${id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"

                        },
                        body: JSON.stringify([updatedStatus])
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                swal("Order Updated Successfully", {
                                    icon: "success",
                                });
                            }
                        })

                }
            });
    }

    */

    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="all-orders card">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
                        </div>
                        <div class="table-responsive">
                            <table class="table no-wrap user-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">User Info</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Order Details</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Delivery</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        allOrders.map(order => <Order
                                            order={order}
                                        ></Order>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;