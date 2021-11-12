import { auth } from "../../firebase/config";
import { LOGOUT_FAIL, LOGOUT_SUCCESS, LOGOUT_START } from "../constants/AuthConstants";

export const fbLogOutStart = () => {
    return {
        type: LOGOUT_START
    }
}
export const fbLogOutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
export const fbLogOutFail = (err) => {
    return {
        type: LOGOUT_FAIL,
        payload: err
    }
}

export const fbLogoutInitiate = () => async (dispatch) => {
    dispatch(fbLogOutStart())
    auth
        .signOut()
        .then(() => {
            dispatch(fbLogOutSuccess())
        })
        .catch(err => {
            dispatch(fbLogOutFail(err))
        })

}