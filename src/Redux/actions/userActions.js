import { SET_USER_TOKEN } from '../../Config/constant'
import { login } from '../../Api/Api'

export const userAction = async (data) => {
  console.log('login action --->', data)
  const { username, password } = data
  const loginData = await login({ username, password })
  return {
    type: SET_USER_TOKEN,
    payload: {
      setUserToken: loginData.token
    }
  }
}
