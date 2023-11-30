import { SET_USER_TOKEN } from "../constant";
export const userReducer = (state = null, action) => {
    console.log("user reducer state --->", state)
    console.log("user reducer action --->", action)

    switch (action.type) {
        case SET_USER_TOKEN:
            return action.payload.setUserToken;
        default:
            return state;
    }
}