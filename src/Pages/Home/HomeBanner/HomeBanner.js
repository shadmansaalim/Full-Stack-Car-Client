import React from 'react';
import './HomeBanner.css';
import { Button } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <div className="home-banner d-flex align-items-center justify-content-center">
            <div>
                <Button variant="outline-light" size="lg">Explore Cars</Button>
            </div>
        </div>
    );
};

export default HomeBanner;