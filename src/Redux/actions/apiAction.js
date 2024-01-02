import { login } from '../../Api/Api'

import { FETCHING_DATA, API_CALL } from '../../Config/constant'

export const apiCallAction = async (dispatch , apiName, data = {}) => { // dispatch, LOGIN_API, data

  console.log("api Name --->",apiName)
  console.log("api data --->",data)

  // console.log('login action --->', data)
  // const { username, password } = data
  // const loginData = await login({ username, password })
  // console.log(loginData)


  // try {
  //   const data = await axios.get(url).then(res => res.data)
  //   dispatch({
  //     type: SET_SOME_DATA,
  //     data: data
  //   })
  // } catch (err) {
  //   dispatch({
  //     type: SET_SOME_DATA,
  //     data: null
  //   })
  // }
  // dispatch({
  //   type: FETCHING_DATA,
  //   fetching: false
  // })
}