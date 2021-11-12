import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('carIdToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');

                }
            })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className="text-start mt-5 col-lg-6">
            <h5>Please enter email address of the user whom you want to make admin</h5>
            <form onSubmit={handleAdminSubmit} className="input-group mt-4">
                <input onBlur={handleOnBlur} type="text" className="form-control" placeholder="User Email" aria-label="User Email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;