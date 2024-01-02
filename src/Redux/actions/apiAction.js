import { api } from '../../Api/Api'

import { API_CALL, API_ERROR } from '../../Config/constant'

export const apiCallAction = async (dispatch, apiName, data = {}) => {
  // dispatch, LOGIN_API, data

  const apiDetails = API_CALL.find((e) => e.NAME === apiName)

  apiDetails.PAYLOAD = data

  dispatch({
    type: apiDetails.afterApiAction,
    payload: apiDetails.DATA
  })


  try {
    const response = await api(apiDetails)
    apiDetails.DATA = { ...response }
    return dispatch({
      type: apiDetails.afterApiAction,
      payload: { ...response }
    })
  } catch (error) {
    console.log(error)
    apiDetails.DATA = error
    return dispatch({
      type: API_ERROR,
      payload: {apiData: apiDetails }
    })
  }
}
