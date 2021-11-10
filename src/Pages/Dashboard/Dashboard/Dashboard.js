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
import { faUserCircle, faSignOutAlt, faBorderAll, faMoneyCheckAlt, faPen, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';


const Dashboard = () => {
    const [toggled, setToggled] = useState(false);
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const { user, logOut } = useAuth();
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const handleOffCanvasClose = () => setOffCanvasShow(false);
    const handleOffCanvasShow = () => setOffCanvasShow(true);

    return (
        <div class={toggled ? "d-flex toggled" : "d-flex"} id="wrapper">

            <div class="bg-dark" id="sidebar-wrapper">
                <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                    <img
                        src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg"
                        width="130"
                        height="40"
                        className="d-inline-block align-top"
                        alt="App Logo"
                    />
                </div>
                <div class="list-group list-group-flush my-3 ">
                    <Link to={`${url}`}><Button className="btn app-main-btn col-10 mb-3 " >
                        <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Button></Link>


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

                    {/* <NavLink to="/make-admin">
                                        <button
                                            onClick={() => {
                                                handleOffCanvasClose();
                                            }}
                                            className="drawer-buttons btn btn-primary w-100 mb-2"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</button>
                                    </NavLink>
                                    <NavLink to="/add-course">
                                        <button onClick={() => {
                                            handleOffCanvasClose();
                                        }}
                                            className="drawer-buttons btn btn-primary w-100 mb-2"><FontAwesomeIcon icon={faPlus} /> Add Course</button>
                                    </NavLink> */}

                </div>
            </div>

            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div class="d-flex align-items-center">
                        <i onClick={() => setToggled(!toggled)} class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                            style={{ color: '#007cc2' }}
                        ></i>
                        <h3 class="m-0">Dashboard</h3>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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

                <div class="container-fluid px-4">


                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
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
                    </Switch>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;

