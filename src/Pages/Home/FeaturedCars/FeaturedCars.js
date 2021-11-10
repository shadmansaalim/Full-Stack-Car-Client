import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import FeaturedCar from '../FeaturedCar/FeaturedCar';


const cars = [
    {
        modelName: "Mazda 2",
        brand: "Mazda",
        img: "https://carsales.pxcrush.net/car/cil/fylgybmaosuywbp99c353kzaa.jpg?aspect=FitWithIn&width=600&height=300&watermark=1452380460",
        bodyType: "Sedan",
        price: "55,747",
        banner: "https://carsales.pxcrush.net/general/content/708g4jj2pw3726ufnwax59fc7.jpg?watermark=1826727299&width=1920&height=1080&width=1920&height=686",
        overview: "TFR40J XT Utility Dual Cab 4dr Spts Auto 6sp 4x2 1075kg 3.0DT Allegiances change with Mazda's BT-50 workhorse, once shared with Ford's Ranger but now virtually a re-badged Isuzu D-MAX. That's not a bad thing: The third-generation Mazda BT-50, which is available in ute and cab-chassis form, comes with higher levels of safety and an economical 140kW/450Nm 3.0-litre four-cylinder turbo-diesel, available in rear-drive and dual-range 4x4 form and driving through six-speed manual or automatic gearboxes. Autonomous emergency braking, attention assist, automatic high beam, blind spot monitor, emergency lane keeping, lane departure warning, lane departure prevention, rear cross traffic alert, roll over protection, secondary collision reduction and eight airbags, including a front centre airbag, are standard. Towing capacity continues at 3.5 tonnes.",
        availableIn: [
            "1.5i Petrol 6 sp Automatic FWD",
            "1.5i Petrol 6 sp Manual FWD"
        ],
        features: [
            "4 doors | 5 doors",
            "5 Star ANCAP Rating",
            "5 seats",
            "6 airbags"
        ]
    },
    {
        modelName: "Audi SQ7",
        brand: "Audi",
        img: "https://carsales.pxcrush.net/car/cil/ccddni1dcf0xb2av6pistfzb7.jpg?aspect=FitWithIn&width=600&height=300&watermark=1284976468",
        bodyType: "SUV",
        price: "184,268",
        banner: "https://carsales.pxcrush.net/general/content/vzdfuaf7w8epxrznhriric3ca.jpg?watermark=592211956&width=1920&height=1080&width=1920&height=686",
        overview: "4M MY21 TDI Wagon 7st 5dr Tiptronic 8sp quattro 4.0DTTeC Audi's Q7-based SQ7 rides high among luxury high-performance large SUVs. Boasting active chassis technology and a 320kW/900Nm 4.0-litre bi-turbo diesel V8, the seven-seat Audi SQ7 comes laden with luxury and technology and is a bold entry in the BMW X5, Bentley Bentayga and Porsche Cayenne class. The quattro driveline with eight-speed Tiptronic transmission, the auto-levelling air suspension and the big alloy wheels, spanning from 19 inches through 20 inches to 22 inches, work together to help the Audi talk to the driver as the punchy engine deals capably with the SQ7's considerable 2.5-tonne weight.",
        availableIn: [
            "4.0DTTeC Diesel 8 sp Automatic 4x4"
        ],
        features: [
            "5 doors",
            "5 Star ANCAP Rating",
            "7 seats",
            "8 airbags"
        ]
    },
    {
        modelName: "BMW M4",
        brand: "BMW",
        img: "https://carsales.pxcrush.net/car/cil/2olh4zc0pin98e75uilasp792.jpg?aspect=FitWithIn&width=600&height=300&watermark=113059628",
        bodyType: "Coupe",
        price: "168,783",
        banner: "https://carsales.pxcrush.net/general/content/abkpb7vnebnqf5loo1otueyzc.jpg?watermark=970755824&width=1920&height=1080&width=1920&height=686",
        overview: "G82 Coupe 2dr Man 6sp 3.0TT Dramatic looks via a new vertically-oriented grille define the latest rear-drive (three AWD variants are coming in late 2021), 3.0-litre six-cylinder G80 series BMW M4 two-door coupe. It comes in regular 353kW/550Nm form, or as a high-output 375kW/650Nm M4 Competition variant the former with a six-speed manual transmission, and the latter because the manual gearbox is limited to 550Nm  an eight-speed automatic. In addition to the usual suite of comfort and driver aids there are new, power-adjustable M sport seats, Merino leather trim, Driving Assistant Professional including steering and lane control assistant, active cruise control, cross traffic warning (front and rear), lane departure and lane change warning.",
        availableIn: [
            "3.0TT Petrol 6 sp Manual RWD"
        ],
        features: [
            "2 doors",
            "4 seats",
            "6 airbags"
        ]
    },
    {
        modelName: "Hyundai Tucson",
        brand: "Hyundai",
        img: "https://carsales.pxcrush.net/car/cil/wgyev5fhxlvvbigp1gcq7ph4f.jpg?aspect=FitWithIn&width=600&height=300&watermark=1154548215",
        bodyType: "SUV",
        price: "38,560",
        banner: "https://carsales.pxcrush.net/general/content/ywzhw96n4ecn9zc5h3h71y9t3.jpg?watermark=1998409719&width=1920&height=1080&width=1920&height=686",
        overview: "TFR40J XT Utility Dual Cab 4dr Spts Auto 6sp 4x2 1075kg 3.0DT Allegiances change with Mazda's BT-50 workhorse, once shared with Ford's Ranger but now virtually a re-badged Isuzu D-MAX. That's not a bad thing: The third-generation Mazda BT-50, which is available in ute and cab-chassis form, comes with higher levels of safety and an economical 140kW/450Nm 3.0-litre four-cylinder turbo-diesel, available in rear-drive and dual-range 4x4 form and driving through six-speed manual or automatic gearboxes. Autonomous emergency braking, attention assist, automatic high beam, blind spot monitor, emergency lane keeping, lane departure warning, lane departure prevention, rear cross traffic alert, roll over protection, secondary collision reduction and eight airbags, including a front centre airbag, are standard. Towing capacity continues at 3.5 tonnes.",
        availableIn: [
            "2.0i Petrol 6 sp Automatic FWD"
        ],
        features: [
            "5 doors",
            "5 Star ANCAP Rating",
            "5 seats",
            "7 airbags"
        ]
    },
    {
        modelName: "Mercedes-Benz GLB-Class GLB200",
        brand: "Mercedes-Benz",
        img: "https://carsales.pxcrush.net/car/cil/3txubuuo5bhb7huipbgnmq8mb.jpg?aspect=FitWithIn&width=600&height=300&watermark=1717792730",
        bodyType: "SUV",
        price: "70,536",
        banner: "https://carsales.pxcrush.net/general/content/5sxs4d4ihqwwgohflay02wv8d.jpg?watermark=1060274468&width=1920&height=1080&width=1920&height=686",
        overview: "X247 802MY GLB200 Wagon 7st 5dr DCT 7sp 1.3T (Oct) The mid-size Mercedes-Benz GLB SUV comes in three petrol-engined variants, all with seven-seat accommodation. The GLB claims to offer class-leading front headroom, along with a sizeable 560-litre boot that can be extended to a total 1755 litres with all seats folded. The range starts with the front-drive 120kW/250Nm 1.3-litre turbo-petrol four-cylinder GLB 200 and proceeds via the AWD 165kW/350Nm 2.0-litre turbo-petrol four GLB 250 to the 225kW/400Nm AMG 35 (An AMG 45 version is due). Universal standard equipment includes nine airbags, Active Brake Assist with semi-autonomous braking, Active Lane Keep Assist, blind-spot monitoring, Traffic Sign Assist, Adaptive High Beam Assist and Active Parking Assist.",
        availableIn: [
            "1.3T Petrol 7 sp Automatic FWD"
        ],
        features: [
            "5 doors",
            "5 Star ANCAP Rating",
            "7 seats",
            "9 airbags"
        ]
    },
    {
        modelName: "Porsche 911",
        brand: "Porsche",
        img: "https://carsales.pxcrush.net/car/cil/6ee8y5c6upz0j0rv3xeofrk6e.jpg?aspect=FitWithIn&width=600&height=300&watermark=1436482859",
        bodyType: "Coupe",
        price: "273,708",
        banner: "https://carsales.pxcrush.net/general/content/q8d9s5by4r33gc6tjqpc5oc7b.jpg?watermark=287575354&width=1920&height=1080&width=1920&height=686",
        overview: "G82 Coupe 2dr Man 6sp 3.0TT Dramatic looks via a new vertically-oriented grille define the latest rear-drive (three AWD variants are coming in late 2021), 3.0-litre six-cylinder G80 series BMW M4 two-door coupe. It comes in regular 353kW/550Nm form, or as a high-output 375kW/650Nm M4 Competition variant the former with a six-speed manual transmission, and the latter because the manual gearbox is limited to 550Nm  an eight-speed automatic. In addition to the usual suite of comfort and driver aids there are new, power-adjustable M sport seats, Merino leather trim, Driving Assistant Professional including steering and lane control assistant, active cruise control, cross traffic warning (front and rear), lane departure and lane change warning.",
        availableIn: [
            "3.0TT Petrol 8 sp Automatic RWD"
        ],
        features: [
            "2 doors",
            "4 seats",
            "4 airbags | 6 airbags"
        ]
    },
    {
        modelName: "Mazda CX-5",
        brand: "Mazda",
        img: "https://carsales.pxcrush.net/car/cil/ogz0foip0gziwidptdr740x85.jpg?aspect=FitWithIn&width=600&height=300&watermark=792099912",
        bodyType: "SUV",
        price: "35,364",
        banner: "https://carsales.pxcrush.net/general/content/xmmzguhu943s08quof1uob9c7.jpg?watermark=576232253&width=1920&height=1080&width=1920&height=686",
        overview: "KF2W76 Maxx Wagon 5dr SKYACTIV-MT 6sp FWD 480kg 2.0i A benchmark among mid-size SUVs, Mazda's CX-5 impresses with its quality presentation, on-road performance and its ability to accommodate passengers and luggage. It's also big on safety, with standard ' forward and reverse ' autonomous emergency braking, rear cross-traffic alert and blind spot sensors. Engines include 2.0-litre 115kW/200Nm, 2.5-litre 140kW/252Nm and 170kW/420Nm turbo petrols and a 2.2-litre turbo-diesel that was up-powered to 147kW/450Nm in 2021. Buyers can choose front-drive or AWD, or six-speed manual or auto gearboxes. Sat-nav is standard from Maxx Sport upwards, while the top-spec Akera comes with leather, powered and heated front seats, adaptive cruise control and head-up display.",
        availableIn: [
            "2.0i Petrol 6 sp Manual FWD",
            "2.0i Petrol 6 sp Automatic FWD",
            "2.5i Petrol 6 sp Automatic 4x4"
        ],
        features: [
            "5 doors",
            "5 Star ANCAP Rating",
            "5 seats",
            "6 airbags"
        ]
    },
    {
        modelName: "Audi S5",
        brand: "Audi",
        img: "https://carsales.pxcrush.net/car/cil/xw21dll9dy0stkc395hpgucbc.jpg?aspect=FitWithIn&width=600&height=300&watermark=990092796",
        bodyType: "Coupe",
        price: "122,765",
        banner: "https://carsales.pxcrush.net/general/content/dj61hu9rg27ez7hvxa79zb9e2.jpg?watermark=2035565560&width=1920&height=1080&width=1920&height=686",
        overview: "F5 MY22 Coupe 2dr Tiptronic 8sp quattro 3.0T A revised range of Audi's mid-size S5 coupe, convertible and Sportback luxury performance models arrived in Australian showrooms in late 2020. Wielding an authoritative 3.0-litre turbo V6 delivering a potent 260kW/500Nm to all four wheels via quattro all-wheel drive and an eight-speed Tiptronic transmission, all Audi S5s perform with authority in a wide range of conditions. Resplendent in the trappings of high-end technology including Audi's virtual cockpit, head-up display and Google Maps integration, and subscribing to the highest safety levels (high and low-speed autonomous emergency braking, pedestrian avoidance technology), the S5 is about as advanced as a mid-size luxury car gets.",
        availableIn: [
            "3.0T Petrol 8 sp Automatic 4x4"
        ],
        features: [
            "2 doors | 5 doors",
            "5 Star ANCAP Rating",
            "4 seats | 5 seats",
            "4 airbags | 6 airbags | 8 airbags"
        ]
    },
    {
        modelName: "Hyundai i30",
        brand: "Hyundai",
        img: "https://carsales.pxcrush.net/car/cil/1dyf5s4y243marnbm6rzkhwad.jpg?aspect=FitWithIn&width=600&height=300&watermark=631398199",
        bodyType: "Sedan",
        price: "25,490",
        banner: "https://carsales.pxcrush.net/general/content/2jquc44mpbtfj8qb37w5kfds8.jpg?watermark=122670170&width=1920&height=1080&width=1920&height=686",
        overview: "G82 Coupe 2dr Man 6sp 3.0TT Dramatic looks via a new vertically-oriented grille define the latest rear-drive (three AWD variants are coming in late 2021), 3.0-litre six-cylinder G80 series BMW M4 two-door coupe. It comes in regular 353kW/550Nm form, or as a high-output 375kW/650Nm M4 Competition variant the former with a six-speed manual transmission, and the latter because the manual gearbox is limited to 550Nm  an eight-speed automatic. In addition to the usual suite of comfort and driver aids there are new, power-adjustable M sport seats, Merino leather trim, Driving Assistant Professional including steering and lane control assistant, active cruise control, cross traffic warning (front and rear), lane departure and lane change warning.",
        availableIn: [
            "2.0i Petrol 6 sp Manual FWD",
            "2.0i Petrol 6 sp Automatic FWD"
        ],
        features: [
            "5 doors",
            "5 Star ANCAP Rating",
            "5 seats",
            "7 airbags"
        ]
    },
    {
        modelName: "BMW 5 Series",
        brand: "BMW",
        img: "https://carsales.pxcrush.net/car/cil/qjkjbppllts2g9e2fjtixfpsd.jpg?aspect=FitWithIn&width=600&height=300&watermark=453476627",
        bodyType: "Sedan",
        price: "111,657",
        banner: "https://carsales.pxcrush.net/general/content/tne4z3j7rtcro6sjeleutkkm3.jpg?watermark=1517883806&width=1920&height=1080&width=1920&height=686",
        overview: "G82 Coupe 2dr Man 6sp 3.0TT Dramatic looks via a new vertically-oriented grille define the latest rear-drive (three AWD variants are coming in late 2021), 3.0-litre six-cylinder G80 series BMW M4 two-door coupe. It comes in regular 353kW/550Nm form, or as a high-output 375kW/650Nm M4 Competition variant the former with a six-speed manual transmission, and the latter because the manual gearbox is limited to 550Nm  an eight-speed automatic. In addition to the usual suite of comfort and driver aids there are new, power-adjustable M sport seats, Merino leather trim, Driving Assistant Professional including steering and lane control assistant, active cruise control, cross traffic warning (front and rear), lane departure and lane change warning.",
        availableIn: [
            "2.0T Petrol 8 sp Automatic RWD"
        ],
        features: [
            "4 doors",
            "5 seats",
            "7 airbags"
        ]
    },

]







const FeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = useState([]);
    //Cars to display in landing page
    const size = 6;

    useEffect(() => {
        fetch(`http://localhost:5000/cars?size=${size}`)
            .then(res => res.json())
            .then(cars => setFeaturedCars(cars))
    }, [])
    return (
        <div className="my-5">
            <Row xs={1} md={3} className="g-4">
                {
                    featuredCars.map(car => <FeaturedCar
                        key={car.carID}
                        car={car}
                    ></FeaturedCar>)
                }
            </Row>
        </div>
    );
};

export default FeaturedCars;