import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating';
import './AddReview.css';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [value, setValue] = useState(0);

    const onSubmit = data => {
        data.photoURL = user.photoURL;
        data.rating = value;
        fetch('https://pure-sands-37131.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Thank you for your review", "We have added your review on our landing page", "success");
                    reset();
                }
            })

    }

    return (
        <div>
            <h4 className="text-start bg-dark text-white p-3 rounded-3 mt-3">Add A Review To Car Sales</h4>
            <div className="col-lg-8">
                <div className="card-body mx-md-4 text-start">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow-lg p-4 mt-4 rounded-3">
                            <p>Please enter your feedback here</p>
                            <div className="form-floating mb-3">
                                <input defaultValue={user?.displayName} type="text" className="form-control" id="floatingServiceName" placeholder="name@example.com" required  {...register("name")} />
                                <label htmlhtmlFor="floatingServiceName"><small>Your Name</small></label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingServiceDescription" style={{ height: '100px' }} {...register("review")}></textarea>
                                <label htmlhtmlFor="floatingServiceDescription">Review</label>
                            </div>
                            <div className="text-start">
                                <Rating
                                    className="fs-3"
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    fractions={2}
                                    value={value}
                                    onChange={(value) => {
                                        setValue(value);
                                    }}
                                ></Rating>
                            </div>
                        </div>
                        <div className="text-start mt-4">
                            <button className="btn app-main-btn text-white w-100 mb-3" type="submit">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;