import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import Car from '../Shared/Car/Car';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Cars.css';

const Cars = () => {
    const { condition } = useParams();
    const [toggled, setToggled] = useState(false);
    const [cars, setCars] = useState([]);


    const [userSelected, setUserSelected] = useState([]);

    useEffect(() => {
        fetch(`https://pure-sands-37131.herokuapp.com/cars?condition=${condition}`)
            .then(res => res.json())
            .then(cars => setCars(cars))
    }, [condition])


    //PAGINATION SETUP CODE

    const [currentVehicles, setCurrentVehicles] = useState(userSelected);
    const [pageCount, setPageCount] = useState(0);


    const [itemOffset, setItemOffset] = useState(0);
    const vehiclesPerPage = 30;

    useEffect(() => {
        const endOffset = itemOffset + vehiclesPerPage;
        setCurrentVehicles(userSelected.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(userSelected.length / vehiclesPerPage));
    }, [itemOffset, userSelected]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * vehiclesPerPage) % userSelected.length;
        setItemOffset(newOffset);
    };


    return (
        <div>
            {
                cars.length
                    ?
                    <>
                        <Navigation></Navigation>
                        <div className={toggled ? "d-flex toggled" : "d-flex"} id="wrapper">

                            <div id="sidebar-wrapper">
                                <div className="list-group my-3">
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <h6 className="ms-2">Brands</h6>
                                        </div>
                                        {/* <div className="row mx-auto col-11">
                                            {
                                                carsBrand.map(brand => <CarBrand
                                                    key={carsBrand.indexOf(brand)}
                                                    index={carsBrand.indexOf(brand)}
                                                    brand={brand}
                                                    handleBrandClick={handleBrandClick}
                                                ></CarBrand>)
                                            }
                                        </div> */}
                                    </div>
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <h6 className="ms-2">Models</h6>
                                        </div>
                                        {/* <div className="form-floating col-11 mx-auto">
                                            <select onChange={
                                                handleModelOnChange
                                            } className="form-select p-0 ps-2" id="floatingSelect" aria-label="Floating label select example">
                                                <option disabled defaultValue selected>Models</option>
                                                {
                                                    vehiclesModel.map(model => <VehicleModel
                                                        key={vehiclesModel.indexOf(model)}
                                                        model={model}
                                                    ></VehicleModel>)
                                                }
                                            </select>
                                        </div> */}
                                    </div>
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <h6 className="ms-2">Types</h6>
                                        </div>
                                        {/* <div className="row col-11 mx-auto">
                                            {
                                                vehiclesType.map(type => <VehicleType
                                                    key={vehiclesType.indexOf(type)}
                                                    index={vehiclesType.indexOf(type)}
                                                    type={type}
                                                    handleTypeClick={handleTypeClick}
                                                ></VehicleType>)
                                            }
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div id="page-content-wrapper" style={{ backgroundColor: '#f2f2f2' }}>
                                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                                    <div className="d-flex align-items-center">
                                        <i onClick={() => setToggled(!toggled)} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                                            style={{ color: '#007cc2' }}
                                        ></i>
                                        <h3 className="m-0 text-uppercase project-title"
                                        >Choose your dream car</h3>
                                    </div>
                                </nav>
                                <div className="container-fluid px-4">

                                </div>
                                <div className="d-flex justify-content-center mx-auto">
                                    {/* Calling the course pagination component for pagination */}
                                    <ReactPaginate
                                        nextLabel=">"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={2}
                                        pageCount={pageCount}
                                        previousLabel="<"
                                        pageClassName="page-item"
                                        pageLinkClassName="page-link"
                                        previousClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextClassName="page-item"
                                        nextLinkClassName="page-link"
                                        breakLabel="..."
                                        breakClassName="page-item"
                                        breakLinkClassName="page-link"
                                        containerClassName="pagination"
                                        activeClassName="active"
                                        renderOnZeroPageCount={null}
                                    />
                                </div>
                                <div className="container-fluid px-4 mt-5">
                                    {
                                        cars.length
                                            ?
                                            <section className="my-5">
                                                {
                                                    toggled
                                                        ?
                                                        <Row xs={1} md={1} xl={2} className="g-4">
                                                            {
                                                                cars.map(car => <Car
                                                                    key={car._id}
                                                                    car={car}
                                                                ></Car>)
                                                            }
                                                        </Row>
                                                        :
                                                        <Row xs={1} md={2} xl={3} className="g-4">
                                                            {
                                                                cars.map(car => <Car
                                                                    key={car._id}
                                                                    car={car}
                                                                ></Car>)
                                                            }
                                                        </Row>
                                                }
                                            </section>
                                            :
                                            <div >
                                                <h4 className="text-center fw-bold">No Vehicles Available Based On Your Filter</h4>
                                                <div className="d-flex justify-content-center align-items-center">

                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <Footer></Footer>
                    </>
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

export default Cars;

