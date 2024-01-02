import { SET_USER_TOKEN } from '../../Config/constant'
import { login } from '../../Api/Api'

export const userAction = (data) => {
  console.log('login action --->', data)
  const { username, password } = data
  const loginData = await login({ username, password })
  console.log(loginData)

  return dispatch => {
    dispatch({
      type: FETCHING_DATA,
      fetching: true
    })
    getSomeAsyncData(dispatch, url)
  }
  return dispatch => {
    type: SET_USER_TOKEN,
    payload: {
      setUserToken: loginData.token
    }
  }
}
