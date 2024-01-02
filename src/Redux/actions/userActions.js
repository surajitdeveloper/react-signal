import { FETCHING_DATA, LOGIN_API, SET_USER_TOKEN } from '../../Config/constant'


export const callLoginAction = (data) => {
  return dispatch => {
    dispatch({
      type: FETCHING_DATA
    })
    getSomeAsyncData(dispatch, LOGIN_API, data, SET_USER_TOKEN)
  }
}

export const setLoginToken = (data) =>{
  dispatch(
    {
      type: SET_USER_TOKEN,
      payload: {
        setUserToken: data.token
      }
    }
  )
}


