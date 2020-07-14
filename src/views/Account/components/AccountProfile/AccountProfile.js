import React from 'react';
import {useSelector} from "react-redux";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    details: {
        display: 'flex'
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },
    progress: {
        marginTop: theme.spacing(2)
    },
    uploadButton: {
        marginRight: theme.spacing(2)
    }
}));

const AccountProfile = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const authentication = useSelector(state => state.authentication);

    const user = {
        name: authentication.user.username,
        city: 'Los Angeles',
        country: 'USA',
        timezone: 'GTM-7',
        avatar: '/images/avatars/avatar_12.png'
    };

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography
                            gutterBottom
                            variant="h2"
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            className={classes.locationText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {user.city}, {user.country}
                        </Typography>
                        <Typography
                            className={classes.dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {user.timezone}
                        </Typography>
                    </div>
                    <Avatar
                        className={classes.avatar}
                        src={user.avatar}
                    />
                </div>
                <div className={classes.progress}>
                    <Typography variant="body1">Profile Completeness: 70%</Typography>
                    <LinearProgress
                        value={70}
                        variant="determinate"
                    />
                </div>
            </CardContent>
            <Divider/>
            <CardActions>
                <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                >
                    Upload picture
                </Button>
                <Button variant="text">Remove picture</Button>
            </CardActions>
        </Card>
    );
};

export default AccountProfile;
