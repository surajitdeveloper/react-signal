import { SET_USER_TOKEN } from '../../Config/constant'
export const userAction = (token) => {
  // console.log("user Action --->", token)
  return {
    type: SET_USER_TOKEN,
    payload: {
      setUserToken: token
    }
  }
}
