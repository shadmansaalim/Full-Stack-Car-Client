import React from 'react';
import { useState } from 'react';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import { Button, Offcanvas } from 'react-bootstrap';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPlus, faUserPlus, faHome, faUserCircle, faSignOutAlt, faBorderAll, faMoneyCheckAlt, faPen, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddCar from '../AddCar/AddCar';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageCars from '../ManageCars/ManageCars';
import ManageReviews from '../ManageReviews/ManageReviews';
import { useEffect } from 'react';
import swal from 'sweetalert';


const Dashboard = () => {
    const [toggled, setToggled] = useState(true);
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const { user, logOut, admin } = useAuth();
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const handleOffCanvasClose = () => setOffCanvasShow(false);
    const handleOffCanvasShow = () => setOffCanvasShow(true);
    const [dashboardData, setDashboardData] = useState({});

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/dashboard-data?email=${user.email}`, {
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
                dashboardData.reviews
                    ?
                    <div className={toggled ? "d-flex toggled" : "d-flex"} id="wrapper">

                        <div className="bg-dark" id="sidebar-wrapper">
                            <div className="text-center pt-4 pb-2 border-bottom">
                                {
                                    user.photoURL ?
                                        <img className=" img-fluid rounded-circle settings-user-img" src={user.photoURL} alt=""></img>
                                        :
                                        <FontAwesomeIcon className="fs-1 text-secondary settings-user-img" icon={faUserCircle} />
                                }
                            </div>
                            <div className="list-group list-group-flush my-3 mx-auto">
                                <Link to="/home"><Button className="btn app-main-btn col-10 mb-3" >
                                    <FontAwesomeIcon icon={faHome} /> Home</Button></Link>
                                <Link to={`${url}`}><Button className="btn app-main-btn col-10 mb-3 " >
                                    <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Button></Link>

                                {
                                    admin
                                        ?
                                        <>
                                            <Link to={`${url}/manage-orders`}>
                                                <Button className="btn app-main-btn col-10 mb-3" >
                                                    <FontAwesomeIcon icon={faBorderAll} /> Manage Orders
                                                </Button>
                                            </Link>
                                            <Link to={`${url}/manage-reviews`}>
                                                <Button className="btn app-main-btn col-10 mb-3" >
                                                    <FontAwesomeIcon icon={faPen} /> Manage Reviews
                                                </Button>
                                            </Link>
                                            <Link to={`${url}/manage-cars`}>
                                                <Button className="btn app-main-btn col-10 mb-3" >
                                                    <FontAwesomeIcon icon={faCar} /> Manage Cars
                                                </Button>
                                            </Link>
                                            <Link to={`${url}/add-car`}>
                                                <Button className="btn app-main-btn col-10 mb-3" >
                                                    <FontAwesomeIcon icon={faPlus} /> Add New Car
                                                </Button>
                                            </Link>
                                            <Link to={`${url}/make-admin`}>
                                                <Button className="btn app-main-btn col-10 mb-3" >
                                                    <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                                                </Button>
                                            </Link>


                                        </>
                                        :
                                        <>
                                            <Link to={`${url}/my-orders`}>
                                                <Button className="btn app-main-btn col-10 mb-3" ><FontAwesomeIcon icon={faBorderAll} /> My Orders</Button>
                                            </Link>

                                            <Link to={`${url}/add-review`}>
                                                <Button className="btn app-main-btn col-10 mb-3" ><FontAwesomeIcon icon={faPen} /> Add Review</Button>
                                            </Link>
                                        </>
                                }
                                <button onClick={() => {
                                    logOut();
                                    handleOffCanvasClose();
                                    history.replace('/');
                                }} className="btn btn-light col-10 mx-auto"><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button>


                            </div>
                        </div>

                        <div id="page-content-wrapper">
                            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                                <div className="d-flex align-items-center">
                                    <i onClick={() => setToggled(!toggled)} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                                        style={{ color: '#007cc2' }}
                                    ></i>
                                    <h3 className="m-0 text-uppercase dashboard-title"
                                    >{user.displayName.split(" ")[0]}'s Dashboard</h3>
                                </div>
                            </nav>
                            <div className="container-fluid px-4">

                                <Switch>
                                    <Route exact path={path}>
                                        {
                                            admin
                                                ?
                                                <DashboardHome
                                                    dashboardData={dashboardData}
                                                ></DashboardHome>
                                                :
                                                <h3 className="text-start mt-4">Hello, {user.displayName}</h3>
                                        }
                                    </Route>
                                    <Route path={`${path}/my-orders`}>
                                        <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`${path}/add-review`}>
                                        <AddReview></AddReview>
                                    </Route>
                                    <AdminRoute path={`${path}/make-admin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/add-car`}>
                                        <AddCar></AddCar>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manage-orders`}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manage-reviews`}>
                                        <ManageReviews></ManageReviews>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manage-cars`}>
                                        <ManageCars></ManageCars>
                                    </AdminRoute>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    :
                    <div class="spinner d-flex align-items-center justify-content-center">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
            }
        </div>



    );
};

export default Dashboard;

