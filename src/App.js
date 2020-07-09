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

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes/>
                </Router>
            </ThemeProvider>
        );
    }
}
