import { SET_USER_TOKEN } from "../constant"
export const userToken = (token) => {
    console.log("user Action --->", token)
    return {
        type: SET_USER_TOKEN,
        payload: {
            setUserToken: token
        }
    }
}