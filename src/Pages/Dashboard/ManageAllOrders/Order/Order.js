import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const Order = ({ order, index }) => {
    const { _id, firstName, lastName, email, phone, streetAddress, streetAddressLine2, city, region, zipcode, country, status, modelID, date, quantity } = order;
    const [orderStatus, setOrderStatus] = useState(status);
    const statusTypes = ["Pending", "Processing", "Shipped", "Delivered"];
    const remainingStatus = statusTypes.filter(status => status !== orderStatus);

    const [url, setUrl] = useState("");
    const handleOrderStatusChange = (e, id) => {
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
                    setUrl(`http://localhost:5000/ordersUpdate/${id}`)
                    setOrderStatus(updatedStatus);
                }
            });
    }

    useEffect(() => {
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify([orderStatus])
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Order Updated Successfully", {
                        icon: "success",
                    });
                }

            })

    }, [orderStatus, url])


    return (
        <tr className="text-start">
            <td class="pl-4">{index + 1}</td>
            <td>
                <h5 class="font-medium mb-0">{firstName + " " + lastName}</h5>
                <span class="text-muted">{email}</span><br />
                <span class="text-muted">Phone : {phone}</span>
            </td>
            <td>
                <span >Model : {modelID}</span><br />
                <span >Quantity : {quantity}</span><br />
                <span>Ordered : {date}</span>
            </td>
            <td>
                <span class="text-muted">{streetAddress}</span><br />
                <span class="text-muted">{streetAddressLine2}</span><br />
                <span class="text-muted">{city},</span>
                <span class="text-muted">{region}</span><br />
                <span class="text-muted">{zipcode},</span>
                <span class="text-muted">{country}</span>
            </td>
            <td>
                <select class={
                    orderStatus === "Pending"
                        ?
                        "form-select mb-3 btn-outline-dark rounded-pill"
                        :
                        (
                            orderStatus === "Processing"
                                ?
                                "form-select mb-3 text-white btn-warning rounded-pill"
                                :
                                "form-select mb-3 text-white btn-success rounded-pill"
                        )

                }
                    aria-label=".example" onChange={(e) => {
                        handleOrderStatusChange(e, _id);
                    }}>
                    <option selected>{orderStatus}</option>
                    {
                        remainingStatus.map(status => <option value={status}>{status}</option>)
                    }
                </select>
            </td>
            <td>
                <button type="button" class="btn btn-outline-light btn-circle btn-lg btn-circle me-lg-2"><i class="fa fa-trash"></i> </button>
                <button type="button" class="btn btn-outline-light btn-circle btn-lg btn-circle mt-2 mt-lg-0"><i class="fa fa-edit"></i> </button>

            </td>
        </tr>
    );
};

export default Order;