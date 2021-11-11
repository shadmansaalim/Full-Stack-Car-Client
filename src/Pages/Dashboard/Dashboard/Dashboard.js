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
import { faPlus, faUserPlus, faHome, faUserCircle, faSignOutAlt, faBorderAll, faMoneyCheckAlt, faPen, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddCar from '../AddCar/AddCar';


const Dashboard = () => {
    const [toggled, setToggled] = useState(false);
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const { user, logOut, admin } = useAuth();
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const handleOffCanvasClose = () => setOffCanvasShow(false);
    const handleOffCanvasShow = () => setOffCanvasShow(true);

    return (
        <div className={toggled ? "d-flex toggled" : "d-flex"} id="wrapper">

            <div className="bg-dark" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                    <img
                        src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                        width="130"
                        height="40"
                        className="d-inline-block align-top"
                        alt="App Logo"
                    />
                </div>
                <div className="list-group list-group-flush my-3 ">
                    <Link to="/home"><Button className="btn app-main-btn col-10 mb-3 " >
                        <FontAwesomeIcon icon={faHome} /> Home</Button></Link>
                    <Link to={`${url}`}><Button className="btn app-main-btn col-10 mb-3 " >
                        <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Button></Link>

                    {
                        admin
                            ?
                            <>
                                <Link to={`${url}/make-admin`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                                    </Button>
                                </Link>
                                <Link to={`${url}/add-car`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faPlus} /> Add New Car
                                    </Button>
                                </Link>
                            </>
                            :
                            <>
                                <Link to={`${url}/pay`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faMoneyCheckAlt} /> Pay</Button>
                                </Link>
                                <Link to={`${url}/my-orders`}>
                                    <Button className="btn app-main-btn col-10 mb-3" ><FontAwesomeIcon icon={faBorderAll} /> My Orders</Button>
                                </Link>

                                <Link to={`${url}/add-review`}>
                                    <Button className="btn app-main-btn col-10 mb-3" ><FontAwesomeIcon icon={faPen} /> Add Review</Button>
                                </Link>
                            </>
                    }




                </div>
            </div>

            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i onClick={() => setToggled(!toggled)} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                            style={{ color: '#007cc2' }}
                        ></i>
                        <h3 className="m-0">Dashboard</h3>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                user.photoURL ?
                                    <img className="img-fluid rounded-circle mx-auto mt-2 mt-lg-0" src={user.photoURL} alt="User" style={{ width: 40, height: 40 }} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} onClick={handleOffCanvasShow} ></img>
                                    :
                                    <FontAwesomeIcon className="fs-1 text-secondary mx-auto mt-2 mt-lg-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} icon={faUserCircle} onClick={handleOffCanvasShow} />
                            }




                            <Offcanvas show={offCanvasShow} onHide={handleOffCanvasClose} placement="end" style={{ maxWidth: 300 }}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="text-center">
                                        {
                                            user.photoURL ?
                                                <img className=" img-fluid rounded-circle settings-user-img" src={user.photoURL} alt=""></img>
                                                :
                                                <FontAwesomeIcon className="fs-1 text-secondary settings-user-img" icon={faUserCircle} />
                                        }
                                        <p className="mt-2 text-dark">{user.displayName}</p>
                                        <div className="divider d-flex align-items-center my-4">
                                        </div>
                                        <button onClick={() => {
                                            logOut();
                                            handleOffCanvasClose();
                                            history.replace('/');
                                        }} className="btn btn-dark w-100"><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button>

                                    </div>

                                </Offcanvas.Body>
                            </Offcanvas>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid px-4">


                    <Switch>
                        <Route exact path={path}>
                            {
                                admin
                                    ?
                                    <DashboardHome></DashboardHome>
                                    :
                                    <h3 className="text-start mt-4">Hello {user.displayName}</h3>
                            }
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
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
                    </Switch>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;

