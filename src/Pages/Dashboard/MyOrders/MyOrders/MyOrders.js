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
            <div className="row row-cols-1 row-cols-md-3 g-4  my-5">
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

{/* <div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Button</a>
  </div>
</div> */}