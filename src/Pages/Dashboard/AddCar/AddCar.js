import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddCar = () => {
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        //Checking if user kept inputs empty using regEx and updating data object
        const availableIn = (data.availableIn).filter(availability => /^\s*$/.test(availability) === false);
        const features = (data.features).filter(feature => /^\s*$/.test(feature) === false);
        data.availableIn = availableIn;
        data.features = features;
        fetch('https://pure-sands-37131.herokuapp.com/add-car', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("New Car Added!", "You can now find these car on cars page", "success");
                    reset();
                }
            })
    }



    return (
        <div className="text-start">
            <h4 className="bg-dark text-white p-3 rounded-3 mt-3">Add New Car For Sale</h4>
            <section className="order-form my-4 mx-4">
                <div className="row">
                    <form className="col-lg-8 shadow-lg p-3 rounded-3" onSubmit={handleSubmit(onSubmit)}>

                        <div className="row mx-4">
                            <div className="col-12 mb-2">
                                <label className="order-form-label">Model Details</label>
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
                                <label className="order-form-label">Price & Type</label>
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
                        <div className="row mt-3 mx-4">
                            <div className="col-12 mb-2">
                                <label className="order-form-label">Images</label>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input
                                    className="order-form-input" placeholder="Thumbnail" required {...register("img")} />
                            </div>
                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                <input type="text"
                                    className="order-form-input" placeholder="Cover" required {...register("banner")} />
                            </div>
                        </div>


                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <label className="order-form-label">Overview</label>
                            </div>
                            <div className="col-12">
                                <textarea class="form-control" placeholder="Write Some Details About Car" id="floatingServiceDescription" style={{ height: '100px' }} required {...register("overview")}></textarea>
                            </div>
                        </div>


                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <label className="order-form-label">Availability & Features</label>
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
                            <div className="col-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="validation" id="validation" value="1" required />
                                    <label htmlFor="validation" className="form-check-label">I know what I need to know</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-11 mx-auto">
                                <button type="submit" id="btnSubmit" className="btn text-white app-main-btn w-100">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>

            </section>
        </div>
    );
};

export default AddCar;