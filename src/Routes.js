import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {RouteWithLayout} from './components';
import {Main as MainLayout} from './layouts';

import {
    Dashboard as DashboardView,
    UserList as UserListView,
    SignIn as SignInView,
    SignUp as SignUpView,
    Account as AccountView
} from './views';


const Routes = () => {
    return (
        <Switch>
            {/*{*/}
            {/*    !localStorage.getItem('user') && <Redirect to={"/sign-in"} />*/}
            {/*}*/}
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={AccountView}
                exact
                layout={MainLayout}
                path="/account"
            />
            <RouteWithLayout
                component={UserListView}
                exact
                layout={MainLayout}
                path="/users"
            />
            <Redirect
                exact
                from="/"
                to="/dashboard"
            />
            <Route
                component={SignInView}
                exact
                path="/sign-in"
            />
            <Route
                component={SignUpView}
                exact
                path="/sign-up"
            />
        </Switch>
    );
};

export default Routes;
