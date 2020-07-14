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
            <RouteWithLayout
                component={props => (
                    localStorage.getItem('user')
                    ? <DashboardView/>
                    : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />
                    )}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={props => (
                    localStorage.getItem('user')
                        ? <UserListView/>
                        : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />
                )}
                exact
                layout={MainLayout}
                path="/users"
            />
            <RouteWithLayout
                component={props => (
                    localStorage.getItem('user')
                        ? <AccountView/>
                        : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />
                )}
                exact
                layout={MainLayout}
                path="/account"
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
