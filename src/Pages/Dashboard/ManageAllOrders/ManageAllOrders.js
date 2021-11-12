import React from 'react';
import './ManageAllOrders.css'
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
const ManageAllOrders = () => {
    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="all-orders card">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
                        </div>
                        <div class="table-responsive">
                            <table class="table no-wrap user-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Occupation</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Added</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                                        <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="pl-4">1</td>
                                        <td>
                                            <h5 class="font-medium mb-0">Daniel Kristeen</h5>
                                            <span class="text-muted">Texas, Unitedd states</span>
                                        </td>
                                        <td>
                                            <span class="text-muted">Visual Designer</span><br />
                                            <span class="text-muted">Past : teacher</span>
                                        </td>
                                        <td>
                                            <span class="text-muted">daniel@website.com</span><br />
                                            <span class="text-muted">999 - 444 - 555</span>
                                        </td>
                                        <td>
                                            <span class="text-muted">15 Mar 1988</span><br />
                                            <span class="text-muted">10: 55 AM</span>
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
                                            <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle"><i class="fa fa-key"></i> </button>
                                            <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                            <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                                            <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-upload"></i> </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;