import { FETCHING_DATA, LOGIN_API } from '../../Config/constant'

import { apiCallAction } from './apiAction'

export const callLoginAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: FETCHING_DATA
    })
    await apiCallAction(dispatch, LOGIN_API, data)
  }
}
