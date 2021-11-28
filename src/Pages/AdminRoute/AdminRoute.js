import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading, adminLoading } = useAuth();
    if (isLoading || adminLoading) {
        return (
            <div class="spinner d-flex align-items-center justify-content-center">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
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