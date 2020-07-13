import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';

import {
    BrowserRouter as Router,
} from "react-router-dom";

import Routes from './Routes';

const theme = createMuiTheme({
        zIndex:
            {
                appBar: 1200,
                drawer: 1100
            }
    }
)

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes/>
            </Router>
        </ThemeProvider>
    );
}

export default App;