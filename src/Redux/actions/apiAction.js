import { login } from '../../Api/Api'
export const getSomeAsyncData = async (dispatch, url) => {

  console.log('login action --->', data)
  const { username, password } = data
  const loginData = await login({ username, password })
  console.log(loginData)

  
  try {
    const data = await axios.get(url).then(res => res.data)
    dispatch({
      type: SET_SOME_DATA,
      data: data
    })
  } catch (err) {
    dispatch({
      type: SET_SOME_DATA,
      data: null
    })
  }
  dispatch({
    type: FETCHING_DATA,
    fetching: false
  })
}