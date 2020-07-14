import React from 'react';
import {useSelector} from "react-redux";
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}));

const Profile = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const authentication = useSelector(state => state.authentication);

    const user = {
        name: authentication.user.username,
        avatar: '/images/avatars/avatar_12.png',
        bio: 'Brain Director'
    };

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt="Person"
                className={classes.avatar}
                component={RouterLink}
                src={user.avatar}
                to="/settings"
            />
            <Typography
                className={classes.name}
                variant="h4"
            >
                {user.name}
            </Typography>
            <Typography variant="body2">{user.bio}</Typography>
        </div>
    );
};

export default Profile;
