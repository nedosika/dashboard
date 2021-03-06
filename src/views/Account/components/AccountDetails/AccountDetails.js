import React, {useState} from 'react';
import {useSelector} from "react-redux";

import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
    TextField
} from '@material-ui/core';

import {countries} from "../../../../helpers";

const useStyles = makeStyles(() => ({
    root: {}
}));

const AccountDetails = props => {
    const {className, ...rest} = props;
    const authentication = useSelector(state => state.authentication);

    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: authentication.user.firstName,
        lastName: authentication.user.lastName,
        email: authentication.user.email,
        phone: authentication.user.phone,
        city: authentication.user.city,
        country: authentication.user.country
    });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <form
                autoComplete="off"
                noValidate
            >
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <Divider/>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                margin="dense"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                margin="dense"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                margin="dense"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Phone Number"
                                margin="dense"
                                name="phone"
                                onChange={handleChange}
                                type="tel"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Country"
                                margin="dense"
                                name="country"
                                onChange={handleChange}
                                required
                                select
                                // eslint-disable-next-line react/jsx-sort-props
                                SelectProps={{native: true}}
                                value={values.country}
                                variant="outlined"
                            >
                                {Object.values(countries).map(option => (
                                    values.country === option.name ?
                                        (<option
                                            key={option.id}
                                            value={option.name}
                                            selected
                                        >
                                            {option.name}
                                        </option>)
                                        :
                                        (<option
                                            key={option.id}
                                            value={option.name}
                                        >
                                            {option.name}
                                        </option>)
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the City"
                                label="City"
                                margin="dense"
                                name="city"
                                onChange={handleChange}
                                required
                                value={values.city}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Save details
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default AccountDetails;
