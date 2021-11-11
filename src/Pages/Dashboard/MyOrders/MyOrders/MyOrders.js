import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MyOrder from '../MyOrder/MyOrder';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders?email=${user.email}`, {
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
            })

    }, [user.email])

    return (
        <div className="container">
            <h4>Order History</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4  mt-3">
                {
                    myOrders.map(order => <MyOrder
                        order={order}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;

