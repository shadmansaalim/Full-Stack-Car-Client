import React from 'react';
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const Order = ({ order }) => {
    const { _id, firstName, lastName, email, phone, streetAddress, streetAddressLine2, city, region, zipcode, country, status, modelID, date, quantity } = order;

    return (
        <tr className="text-start">
            <td class="pl-4">1</td>
            <td>
                <h5 class="font-medium mb-0">{firstName + " " + lastName}</h5>
                <span class="text-muted">{email}</span><br />
                <span class="text-muted">Phone : {phone}</span>
            </td>
            <td>
                <span >Model : {modelID}</span><br />
                <span >Quantity : {quantity}</span><br />
                <span>Ordered : {date}</span>
            </td>
            <td>
                <span class="text-muted">{streetAddress}</span><br />
                <span class="text-muted">{streetAddressLine2}</span><br />
                <span class="text-muted">{city},</span>
                <span class="text-muted">{region}</span><br />
                <span class="text-muted">{zipcode},</span>
                <span class="text-muted">{country}</span>
            </td>
            <td className="text-dark">
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-dark rounded-pill"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </td>
            <td>
                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>

            </td>
        </tr>
    );
};

export default Order;