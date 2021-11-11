import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return (
            <h2>Loading</h2>
        );

    }
    return (
        <Route
            {...rest}
            render={({ location }) => (user.email && admin) ? children :
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location },
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;