import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MyOrder from '../MyOrder/MyOrder';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';


const MyOrders = () => {
    const [dataLoading, setDataLoading] = useState(false);
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setDataLoading(true);
        fetch(`https://pure-sands-37131.herokuapp.com/my-orders?email=${user.email}`, {
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
            .then(result => {
                setMyOrders(result);
                setDataLoading(false);
            })

    }, [user.email, history])

    const handleDeleteOrder = id => {
        swal({
            title: "Are you sure?",
            text: `Your ordered car will be cancelled!`,
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
                                const remainingOrders = myOrders.filter(order => order._id !== id);
                                setMyOrders(remainingOrders);
                            }
                        })
                    swal("Order Cancelled Successfully", {
                        icon: "success",
                    });

                }
            });

    }

    return (
        <div>
            {
                myOrders.length
                    ?
                    <div className="container">
                        <h4 className="text-start bg-dark text-white p-3 rounded-3 mt-3">Your Order History</h4>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                            {
                                myOrders.map(order => <MyOrder
                                    order={order}
                                    handleDeleteOrder={handleDeleteOrder}
                                ></MyOrder>)
                            }
                        </div>
                    </div>

                    :
                    dataLoading
                        ?
                        <div class="spinner d-flex align-items-center justify-content-center">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        :
                        <h3 className="mt-3">You have zero pending orders</h3>
            }
        </div>
    );
};

export default MyOrders;

