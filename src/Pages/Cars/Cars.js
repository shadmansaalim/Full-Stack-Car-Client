import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import Car from '../Shared/Car/Car';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Cars.css';
import CarBrand from './CarBrand';
import CarModel from './CarModel';
import CarType from './CarType';
import notFound from '../../images/not-found.png';

const Cars = () => {
    const { condition } = useParams();
    const [toggled, setToggled] = useState(true);
    const [cars, setCars] = useState([]);
    const [carCondition, setCarCondition] = useState(condition);

    const carsBrand = [];
    const carsModel = [];
    const carsType = [];

    const [userSelected, setUserSelected] = useState([]);


    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);
    const [model, setModel] = useState(null);

    const history = useHistory();

    useEffect(() => {
        history.push(`/cars/${carCondition}`);
        fetch(`https://pure-sands-37131.herokuapp.com/cars?condition=${carCondition}`)
            .then(res => res.json())
            .then(cars => {
                setCars(cars);
                setUserSelected(cars);
            })
    }, [carCondition])

    cars.forEach(car => {
        if ((carsBrand.find(brand => brand === car.brand)) === undefined) {
            carsBrand.push(car.brand);
        }
        if ((carsModel.find(model => model === car.modelName)) === undefined) {
            carsModel.push(car.modelName);
        }
        if ((carsType.find(type => type === car.bodyType)) === undefined) {
            carsType.push(car.bodyType);
        }
    });


    // //PAGINATION SETUP CODE

    // const [currentCars, setCurrentCars] = useState(userSelected);
    // const [pageCount, setPageCount] = useState(0);


    // const [itemOffset, setItemOffset] = useState(0);
    // const carsPerPage = 12;

    // useEffect(() => {
    //     const endOffset = itemOffset + carsPerPage;
    //     setCurrentCars(userSelected.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(userSelected.length / carsPerPage));
    // }, [itemOffset, userSelected]);

    // // Invoke when user click to request another page.
    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * carsPerPage) % userSelected.length;
    //     setItemOffset(newOffset);
    // };






    //Brand boxes functionality
    const handleBrandClick = (brand, clicked) => {
        //Finding the cars that user clicked by brand
        const selectedBrandCars = cars.filter(car => car.brand === brand);


        //Checking whether user clicked on any other make brand
        if (userSelected.length !== cars.length) {
            //Checking whether user is clicking second time for removing the filter or not


            if (clicked) {
                const newBrands = [...brands, brand];
                setBrands(newBrands);
                if (types.length) {
                    let brandsId = [];
                    let typesId = []
                    for (const t of types) {
                        (cars.filter(car => car.bodyType === t)).forEach(car => {
                            brandsId.push(car._id);
                        });
                    }
                    for (const b of newBrands) {
                        (cars.filter(car => car.brand === b)).forEach(car => {
                            typesId.push(car._id);
                        });
                    }

                    const commonId = brandsId.filter(id => typesId.includes(id));


                    let newSelected = [];

                    for (const id of commonId) {
                        newSelected.push(cars.find(car => car._id === id));
                    }

                    //Match model
                    if (model !== null) {
                        newSelected = newSelected.filter(car => car.modelName === model);
                    }

                    setUserSelected(newSelected);
                }
                else {
                    let newSelected = cars.filter(car => car.brand === brand)
                    //Match model
                    if (model !== null) {
                        newSelected = newSelected.filter(car => car.modelName === model);
                        setUserSelected(newSelected);
                    }
                    else {
                        setUserSelected([...userSelected, ...newSelected]);
                    }
                }
            }
            else {
                setBrands(brands.filter(b => b !== brand));
                const newSelected = userSelected.filter(car => car.brand !== brand)
                //Checking whether this is the last selected box or not so that if this is unselected we can display all the cars
                if (newSelected.length === 0) {
                    if (types.length) {
                        let typesCars = [];
                        for (const t of types) {
                            (cars.filter(car => car.bodyType === t)).forEach(car => {
                                typesCars.push(car)
                            });
                        }

                        //Match model
                        if (model !== null) {
                            setUserSelected(typesCars.filter(car => car.modelName === model));
                        }
                        else {
                            setUserSelected(typesCars);
                        }
                    }
                    //Match model
                    else if (model !== null && !types.length) {
                        setUserSelected(cars.filter(car => car.modelName === model));
                    }
                    else {
                        setUserSelected(cars);
                    }
                }
                else {
                    if (model !== null) {
                        setUserSelected(userSelected.filter(car => car.modelName === model));
                    }
                    else {
                        setUserSelected(newSelected);
                    }
                }
            }
        }
        else {
            setBrands([brand]);
            setUserSelected(selectedBrandCars);
        }

        window.scrollTo(0, 0);

    }

    //Type boxes functionality
    const handleTypeClick = (type, clicked) => {
        //Finding the cars that user clicked by type
        const selectedTypeCars = cars.filter(car => car.bodyType === type);


        //Checking whether user clicked on any other type of car
        if (userSelected.length !== cars.length) {
            //Checking whether user is clicking second time for removing the filter or not


            if (clicked) {
                const newTypes = [...types, type];
                setTypes(newTypes);
                if (brands.length) {
                    let brandsId = [];
                    let typesId = []
                    for (const b of brands) {
                        (cars.filter(car => car.brand === b)).forEach(car => {
                            brandsId.push(car._id);
                        });
                    }
                    for (const t of newTypes) {
                        (cars.filter(car => car.bodyType === t)).forEach(car => {
                            typesId.push(car._id)
                        });
                    }

                    const commonId = brandsId.filter(id => typesId.includes(id));

                    let newSelected = [];

                    for (const id of commonId) {
                        newSelected.push(cars.find(car => car._id === id));
                    }

                    //Match model
                    if (model !== null) {
                        newSelected = newSelected.filter(car => car.modelName === model);
                    }
                    setUserSelected(newSelected);
                }
                else {
                    let newSelected = cars.filter(car => car.bodyType === type)
                    //Match model
                    if (model !== null) {
                        newSelected = newSelected.filter(car => car.modelName === model);
                        setUserSelected(newSelected);
                    }
                    else {
                        setUserSelected([...userSelected, ...newSelected]);
                    }
                }
            }
            else {
                setTypes(types.filter(t => t !== type));
                const newSelected = userSelected.filter(car => car.bodyType !== type)

                //Checking whether this is the last selected box or not so that if this is unselected we can display all the cars
                if (newSelected.length === 0) {
                    if (brands.length) {
                        let brandCars = [];
                        for (const b of brands) {
                            (cars.filter(car => car.brand === b)).forEach(car => {
                                brandCars.push(car)
                            });
                        }
                        //Match model
                        if (model !== null) {
                            setUserSelected(brandCars.filter(car => car.modelName === model));
                        }
                        else {
                            setUserSelected(brandCars);
                        }
                    }
                    //Match model
                    else if (model !== null && !brands.length) {
                        setUserSelected(cars.filter(car => car.modelName === model));
                    }
                    else {
                        setUserSelected(cars);
                    }
                }
                else {
                    setUserSelected(newSelected);
                }
            }
        }
        else {
            setTypes([type]);
            setUserSelected(selectedTypeCars);
        }
        window.scrollTo(0, 0);
    }


    //Model Drop Down Functionality
    const handleModelOnChange = (e) => {
        const newModel = e.target.value;
        console.log(newModel, model);
        if (newModel === model) {
            alert('fsdgsdf')
        }
        else {
            setModel(e.target.value);
            if (brands.length || types.length) {
                const newSelected = userSelected.filter(car => car.modelName === newModel);
                setUserSelected(newSelected);
            }
            else {
                const newSelected = cars.filter(car => car.modelName === newModel);
                setUserSelected(newSelected);
            }
        }


        window.scrollTo(0, 0);
    }





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
                                        <div className="row mx-auto col-11">
                                            {
                                                carsBrand.map(brand => <CarBrand
                                                    key={carsBrand.indexOf(brand)}
                                                    index={carsBrand.indexOf(brand)}
                                                    brand={brand}
                                                    handleBrandClick={handleBrandClick}
                                                ></CarBrand>)
                                            }
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <h6 className="ms-2">Models</h6>
                                        </div>
                                        <div className="form-floating col-11 mx-auto">
                                            <select onChange={
                                                handleModelOnChange
                                            } className="form-select p-0 ps-2" id="floatingSelect" aria-label="Floating label select example">
                                                <option disabled defaultValue selected>Models</option>
                                                {
                                                    carsModel.map(model => <CarModel
                                                        key={carsModel.indexOf(model)}
                                                        model={model}
                                                    ></CarModel>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="d-flex">
                                            <h6 className="ms-2">Types</h6>
                                        </div>
                                        <div className="row col-11 mx-auto">
                                            {
                                                carsType.map(type => <CarType
                                                    key={carsType.indexOf(type)}
                                                    index={carsType.indexOf(type)}
                                                    type={type}
                                                    handleTypeClick={handleTypeClick}
                                                ></CarType>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="page-content-wrapper" style={{ backgroundColor: '#f2f2f2' }}>
                                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                                    <div className="d-flex align-items-center">
                                        <i onClick={() => setToggled(!toggled)} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                                            style={{ color: 'black' }}
                                        ></i>
                                        <div className="col-lg-6 mx-auto btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <label onClick={() => setCarCondition("all-cars")} class={carCondition === "all-cars" ? "btn app-main-btn active rounded-pill me-2 px-4 py-1" : "btn app-outline-btn rounded-pill me-2 px-4 py-1"} for="all-cars">
                                                All
                                                <input type="radio" class="btn-check" name="condition" id="all-cars" autocomplete="off" checked />
                                            </label>
                                            <label onClick={() => setCarCondition("new-cars")} class={carCondition === "new-cars" ? "btn app-main-btn active rounded-pill me-2 px-4 py-1" : "btn app-outline-btn rounded-pill me-2 px-4 py-1"} for="new-cars">New
                                                <input type="radio" class="btn-check" name="condition" id="new-cars" autocomplete="off" />
                                            </label>
                                            <label onClick={() => setCarCondition("used-cars")} class={carCondition === "used-cars" ? "btn app-main-btn active rounded-pill px-4 py-1" : "btn app-outline-btn rounded-pill px-4 py-1"} for="used-cars">Used
                                                <input type="radio" class="btn-check" name="condition" id="used-cars" autocomplete="off" />
                                            </label>
                                        </div>
                                    </div>
                                </nav>
                                <div className="container-fluid px-4">

                                </div>
                                <div className="d-flex justify-content-center mx-auto">
                                    {/* Calling the car pagination component for pagination */}
                                    {/* <ReactPaginate
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
                                    /> */}
                                </div>
                                <div className="container-fluid px-4 mt-5">
                                    {
                                        userSelected.length
                                            ?
                                            <section className="my-5">
                                                {
                                                    toggled
                                                        ?
                                                        <Row xs={1} md={1} xl={2} className="g-4">
                                                            {
                                                                userSelected.map(car => <Car
                                                                    key={car._id}
                                                                    car={car}
                                                                ></Car>)
                                                            }
                                                        </Row>
                                                        :
                                                        <Row xs={1} md={2} xl={3} className="g-4">
                                                            {
                                                                userSelected.map(car => <Car
                                                                    key={car._id}
                                                                    car={car}
                                                                ></Car>)
                                                            }
                                                        </Row>
                                                }
                                            </section>
                                            :
                                            <div >
                                                <h4 className="text-center fw-bold">No Cars Available Based On Your Filter</h4>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <img className="img-fluid col-11 col-md-9 col-lg-6 mx-auto" src={notFound} alt="" />
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

