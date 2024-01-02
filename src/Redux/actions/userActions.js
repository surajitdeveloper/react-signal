import { FETCHING_DATA, LOGIN_API, SET_USER_TOKEN } from '../../Config/constant'

import { apiCallAction } from './apiAction'

export const callLoginAction = (data) => {
  return dispatch => {
    dispatch({
      type: FETCHING_DATA
    })
    apiCallAction(dispatch, LOGIN_API, data)
  }
}

// export const setLoginToken = (data) =>{
//   return dispatch => {
//   dispatch(
//     {
//       type: SET_USER_TOKEN,
//       payload: {
//         setUserToken: data.token
//       }
//     }
//   )}
// }


