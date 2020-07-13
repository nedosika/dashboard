import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const Dashboard = (props) => {
    if(!localStorage.getItem("user")) {
        return(<Redirect exact to="/sign-in"/>)
    }

    return (
        <div>
            Dashboard
        </div>
    );
};

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Dashboard);
