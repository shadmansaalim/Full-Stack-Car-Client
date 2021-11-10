import React from 'react';
import { Col, Card } from 'react-bootstrap';

// "modelName": "BMW 5 Series",
//     "carID": "c10",
//         "brand": "BMW",
//             "img": "https://carsales.pxcrush.net/car/cil/qjkjbppllts2g9e2fjtixfpsd.jpg?aspect=FitWithIn&width=600&height=300&watermark=453476627",
//                 "bodyType": "Sedan",
//                     "price": "111,657",
//                         "banner": "https://carsales.pxcrush.net/general/content/tne4z3j7rtcro6sjeleutkkm3.jpg?watermark=1517883806&width=1920&height=1080&width=1920&height=686",
//                             "overview": "G82 Coupe 2dr Man 6sp 3.0TT Dramatic looks via a new vertically-oriented grille define the latest rear-drive (three AWD variants are coming in late 2021), 3.0-litre six-cylinder G80 series BMW M4 two-door coupe. It comes in regular 353kW/550Nm form, or as a high-output 375kW/650Nm M4 Competition variant the former with a six-speed manual transmission, and the latter because the manual gearbox is limited to 550Nm  an eight-speed automatic. In addition to the usual suite of comfort and driver aids there are new, power-adjustable M sport seats, Merino leather trim, Driving Assistant Professional including steering and lane control assistant, active cruise control, cross traffic warning (front and rear), lane departure and lane change warning.",
//                                 "availableIn": [
//                                     "2.0T Petrol 8 sp Automatic RWD"
//                                 ],
//                                     "features": [
//                                         "4 doors",
//                                         "5 seats",
//                                         "7 airbags"
//                                     ]


const FeaturedCar = ({ car }) => {
    const { modelName, bodyType, img, price } = car;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-dark">
                    <Card.Title>{modelName}</Card.Title>
                    <Card.Title className="fw-lighter text-muted">{bodyType}</Card.Title>
                    <Card.Text>
                        <small>Drive away from</small>
                        <br />
                        <h4>${price}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeaturedCar;