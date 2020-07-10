import { userConstants } from '../constants';
import { userService } from '../services';

const login = (username, password) => {
    console.log("signIn");
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );
    };

    const request = (user) => { return { type: userConstants.LOGIN_REQUEST, user } }
    const success = (user) => { return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout,
};