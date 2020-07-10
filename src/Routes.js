import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {RouteWithLayout} from './components';
import {Main as MainLayout} from './layouts';

import {
    Dashboard as DashboardView,
    UserList as UserListView,
    SignIn as SignInView,
    SignUp as SignUpView
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/dashboard"
            />
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={UserListView}
                exact
                layout={MainLayout}
                path="/users"
            />
            <Route
                render={SignInView}
                exact
                path="/sign-in"
            />
            <Route
                render={SignUpView}
                exact
                path="/sign-up"
            />
        </Switch>
    );
};

export default Routes;
