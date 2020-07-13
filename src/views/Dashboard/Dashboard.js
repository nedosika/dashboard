import React from 'react';
import { connect } from 'react-redux';

const Dashboard = () => {
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
