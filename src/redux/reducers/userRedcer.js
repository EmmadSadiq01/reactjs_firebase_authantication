import { FACEBOOK_LOGIN, FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS } from "../constants/AuthConstants";

const initialState = {
    loading: false,
    currentUser: false,
    error: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN:
        case LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            }
        case FACEBOOK_LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: null,
            }
        default:
            return state;
    }
}

export default userReducer;