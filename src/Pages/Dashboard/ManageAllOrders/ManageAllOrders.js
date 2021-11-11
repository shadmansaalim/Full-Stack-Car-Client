import React from 'react';
import './ManageAllOrders.css'
const ManageAllOrders = () => {
    return (
        <div>
            <div class="container mt-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="rounded">
                            <div class="table-responsive table-borderless">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th>Order #</th>
                                            <th>Company name</th>
                                            <th>status</th>
                                            <th>Total</th>
                                            <th>Created</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        <tr class="cell-1">
                                            <td class="text-center">1</td>
                                            <td>#SO-13487</td>
                                            <td>Gasper Antunes</td>
                                            <td><span class="badge badge-success">Fullfilled</span></td>
                                            <td>$2674.00</td>
                                            <td>Today</td>
                                            <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                        </tr>
                                        <tr class="cell-1">
                                            <td class="text-center">2</td>
                                            <td>#SO-13453</td>
                                            <td>Aartsen van</td>
                                            <td><span class="badge badge-info">Confirmed</span></td>
                                            <td>$3454.00</td>
                                            <td>Yesterday</td>
                                            <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                        </tr>
                                        <tr class="cell-1">
                                            <td class="text-center">3</td>
                                            <td>#SO-13498</td>
                                            <td>Trashes Habard</td>
                                            <td><span class="badge badge-danger">Partially shipped</span></td>
                                            <td>$6274.00</td>
                                            <td>May 12,2020</td>
                                            <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                        </tr>
                                        <tr class="cell-1">
                                            <td class="text-center">4</td>
                                            <td>#SO-16499</td>
                                            <td>Samban Hubart</td>
                                            <td><span class="badge badge-success">Fullfilled</span></td>
                                            <td>$6375.00</td>
                                            <td>May 11,2020</td>
                                            <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;