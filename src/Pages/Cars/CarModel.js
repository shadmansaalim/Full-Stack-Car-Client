import React from 'react';

const CarModel = ({ model }) => {
    return (
        <option value={model}>{model}</option>
    );
};

export default CarModel;