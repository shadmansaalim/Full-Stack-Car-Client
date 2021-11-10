import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/sign-in",
                        state: { from: location },
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;