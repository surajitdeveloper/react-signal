import { FETCHING_DATA, LOGIN_API, API_CALL } from '../../Config/constant'

import { apiCallAction } from './apiAction'

export const callLoginAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: FETCHING_DATA,
      payload: { apiData: API_CALL.find((e) => e.NAME === LOGIN_API) }
    })
    await apiCallAction(dispatch, LOGIN_API, data)
  }
}
