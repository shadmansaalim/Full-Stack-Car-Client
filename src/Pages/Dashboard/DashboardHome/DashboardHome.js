import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [dashboardData, setDashboardData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard-data?email=${user.email}`, {
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
                console.log(result)
                setDashboardData(result);
            })
    }, [user.email])
    return (
        <div>
            {
                dashboardData.cars
                    ?
                    <div className="row g-3 my-2 text-white">
                        <div className="col-md-3">
                            <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#007cc2' }}>
                                <div>
                                    <h3 className="fs-2">{dashboardData.cars}</h3>
                                    <p className="fs-5">Cars</p>
                                </div>
                                <i className="fas fa-car fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3  shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#007cc2' }}>
                                <div>
                                    <h3 className="fs-2">{dashboardData.users}</h3>
                                    <p className="fs-5">Users</p>
                                </div>
                                <i
                                    className="fas fa-users fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#007cc2' }}>
                                <div>
                                    <h3 className="fs-2">{dashboardData.orders}</h3>
                                    <p className="fs-5">Orders</p>
                                </div>
                                <i className="fas fa-box fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3  shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#007cc2' }}>
                                <div>
                                    <h3 className="fs-2">{dashboardData.reviews}</h3>
                                    <p className="fs-5">Reviews</p>
                                </div>
                                <i className="fas fa-pen fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>
                    </div>
                    :
                    <h5>Loading</h5>
            }
        </div>
    );
};

export default DashboardHome;