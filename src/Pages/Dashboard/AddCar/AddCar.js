import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
const AddCar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();
    const [thumbnail, setThumbnail] = useState(null);
    const [cover, setCover] = useState(null);

    const onSubmit = data => {
        setIsLoading(true);
        //Checking if user kept inputs empty using regEx and updating data object
        const availableIn = (data.availableIn).filter(availability => /^\s*$/.test(availability) === false);
        const features = (data.features).filter(feature => /^\s*$/.test(feature) === false);
        data.availableIn = availableIn;
        data.features = features;

        if (!thumbnail && cover) {
            alert('Please add an image')
            return;
        }


        const formData = new FormData();
        formData.append('modelName', data.modelName);
        formData.append('brand', data.brand);
        formData.append('price', data.price);
        formData.append('bodyType', data.bodyType);
        formData.append('img', thumbnail);
        formData.append('banner', cover);
        formData.append('overview', data.overview);
        formData.append('availableIn', JSON.stringify(data.availableIn));
        formData.append('features', JSON.stringify(data.features));
        formData.append('condition', data.condition);
        formData.append('available', data.available);
        console.log(formData);
        fetch('https://pure-sands-37131.herokuapp.com/add-car', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsLoading(false);
                    swal("New Car Added!", "You can now find this car on cars page", "success");
                    reset();
                }
            })
    }



    return (
        <div className="text-start">
            <h4 className="bg-dark text-white p-3 rounded-3 mt-3">Add New Car For Sale</h4>
            <section className="order-form">
                <div className="row">
                    <form className="col-lg-8 shadow-lg p-3 rounded-3" onSubmit={handleSubmit(onSubmit)}>

                        <div className="row mx-4">
                            <div className="col-12 mb-2">
                                <label className="order-form-label"><u>Model Details</u></label>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text"
                                    className="order-form-input" placeholder="Model Name" required {...register("modelName")} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <input type="text"
                                    className="order-form-input" placeholder="Brand Name" required {...register("brand")} />
                            </div>
                        </div>
                        <div className="row mt-3 mx-4">
                            <div className="col-12 mb-2">
                                <label className="order-form-label"><u>Price & Type</u></label>
                            </div>

                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <input type="text"
                                    className="order-form-input" required placeholder="Price" {...register("price")} />
                            </div>

                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <input type="text"
                                    className="order-form-input" placeholder="Body Type" required {...register("bodyType")} />
                            </div>
                        </div>
                        <div className="row mt-4 mx-4">
                            <div className="col-12 col-sm-6">
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label><small><u>Thumbnail Image</u></small></Form.Label>
                                    <Form.Control type="file" onChange={e => setThumbnail(e.target.files[0])} required />
                                </Form.Group>
                            </div>
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label><small><u>Cover Photo</u></small></Form.Label>
                                    <Form.Control type="file" onChange={e => setCover(e.target.files[0])} required />
                                </Form.Group>
                            </div>
                        </div>


                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <label className="order-form-label"><u>Overview</u></label>
                            </div>
                            <div className="col-12">
                                <textarea class="form-control" placeholder="Write Some Details About Car" id="floatingServiceDescription" style={{ height: '100px' }} required {...register("overview")}></textarea>
                            </div>
                        </div>


                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <label className="order-form-label"><u>Availability & Features</u></label>
                            </div>

                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                <input type="text" className="order-form-input" placeholder="Availability1"      {...register(`availableIn.0`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                <input type="text" className="order-form-input" placeholder="Feature1"   {...register(`features.0`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                <input type="text" className="order-form-input" placeholder="Availability2"    {...register(`availableIn.1`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                <input type="text" className="order-form-input" placeholder="Feature2"  {...register(`features.1`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                <input type="text" className="order-form-input" placeholder="Availability3"    {...register(`availableIn.2`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                <input type="text" className="order-form-input" placeholder="Feature3"  {...register(`features.2`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                <input type="text" className="order-form-input" placeholder="Availability4"   {...register(`availableIn.3`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                <input type="text" className="order-form-input" placeholder="Feature4" {...register(`features.3`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                <input type="text" className="order-form-input" placeholder="Availability5"    {...register(`availableIn.4`)} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                <input type="text" className="order-form-input" placeholder="Feature5" {...register(`features.4`)} />
                            </div>

                        </div>
                        <div className="row mt-3 mx-4">
                            <div className="col-12 mb-2">
                                <label className="order-form-label"><u>More Information</u></label>
                            </div>
                            <div className="col-11 col-sm-5 ms-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                        value="New" required {...register("condition")} />
                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        <i>  New Car</i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input value="Used" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required {...register("condition")} />
                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                        <i>     Used Car</i>
                                    </label>
                                </div>
                            </div>
                            <div className="col-11 col-sm-5 mt-2 mt-sm-0">
                                <div class="form-check">
                                    <input value="Available" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" required {...register("available")} />
                                    <label class="form-check-label" htmlFor="flexRadioDefault3">
                                        <i>  Available</i>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input value="Out of Stock" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" required {...register("available")} />
                                    <label class="form-check-label" htmlFor="flexRadioDefault4">
                                        <i>      Out of Stock</i>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mx-4">
                            <div className="col-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="validation" id="validation" value="1" required />
                                    <label htmlFor="validation" className="form-check-label">I know that this item will be added to the website and I being an Admin was asked to do it.</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-11 mx-auto">

                                {
                                    isLoading
                                        ?
                                        <button type="submit" id="btnSubmit" className="btn text-white app-main-btn w-100" disabled>
                                            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Uploading
                                        </button>
                                        :
                                        <button type="submit" id="btnSubmit" className="btn text-white app-main-btn w-100">
                                            Submit
                                        </button>
                                }

                            </div>
                        </div>

                    </form>
                </div>

            </section>
        </div>
    );
};

export default AddCar;