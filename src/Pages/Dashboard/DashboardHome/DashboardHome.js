import React from 'react';




const DashboardHome = ({ dashboardData }) => {
    return (
        <div>
            <div className="row  g-3 my-2 text-white">
                <div className="col-lg-6 col-xl-3">
                    <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#3984ff' }}>
                        <div>
                            <h3 className="fs-2">{dashboardData.cars}</h3>
                            <p className="fs-5">Cars</p>
                        </div>
                        <i className="fas fa-car fs-2 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-lg-6 col-xl-3">
                    <div className="p-3  shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#fa5649' }}>
                        <div>
                            <h3 className="fs-2">{dashboardData.users}</h3>
                            <p className="fs-5">Users</p>
                        </div>
                        <i
                            className="fas fa-users fs-2 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-lg-6 col-xl-3">
                    <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#ffa113' }}>
                        <div>
                            <h3 className="fs-2">{dashboardData.orders}</h3>
                            <p className="fs-5">Orders</p>
                        </div>
                        <i className="fas fa-box fs-2 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>

                <div className="col-lg-6 col-xl-3">
                    <div className="p-3  shadow-sm d-flex justify-content-around align-items-center rounded" style={{ backgroundColor: '#5a00dd' }}>
                        <div>
                            <h3 className="fs-2">{dashboardData.reviews}</h3>
                            <p className="fs-5">Reviews</p>
                        </div>
                        <i className="fas fa-pen fs-2 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;