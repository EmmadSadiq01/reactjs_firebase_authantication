import { auth, facebookProvider } from "../../firebase/config";
import { FACEBOOK_LOGIN, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "../constants/AuthConstants";

export const fbLogin = () => {
    return {
        type: FACEBOOK_LOGIN
    }
}
export const fbLoginSuccess = (user) => {
    return {
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: user
    }
}
export const fbLoginFail = (error) => {
    return {
        type: FACEBOOK_LOGIN_FAIL,
        payload: error
    }
}

export const fbLoginInitiate = () => async (dispatch) => {
    dispatch(fbLogin());
    auth
        .signInWithPopup(facebookProvider.addScope('user_birthday, email'))
        .then(({ user }) => {
            dispatch(fbLoginSuccess(user))
        })
        .catch(err => {
            dispatch(fbLoginFail(err))
        })
}