import { login } from '../../Api/Api'
export const getSomeAsyncData = async (dispatch, url) => {
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