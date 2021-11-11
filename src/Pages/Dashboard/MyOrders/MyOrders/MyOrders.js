import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);


    useEffect(() => {

    }, [])
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4  my-5">
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

{/* <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div> */}