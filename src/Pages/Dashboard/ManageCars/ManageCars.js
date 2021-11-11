import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import Car from '../../Shared/Car/Car';

const ManageCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(cars => setCars(cars))
    }, [])

    const handleDeleteCar = id => {
        swal({
            title: "Are you sure?",
            text: `Car will be removed from website`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `http://localhost:5000/cars/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingOrders = cars.filter(order => order._id !== id);
                                setCars(remainingOrders);
                            }
                        })
                    swal("Car Removed Successfully", {
                        icon: "success",
                    });

                }
            });
    }


    return (
        <div className="mt-4">
            <Container>
                <section className="my-5">
                    <Row xs={1} md={3} className="g-4">
                        {
                            cars.map(car => <Car
                                key={car._id}
                                car={car}
                                handleDeleteCar={handleDeleteCar}
                            ></Car>)
                        }
                    </Row>
                </section>
            </Container>
        </div>
    );
};

export default ManageCars;