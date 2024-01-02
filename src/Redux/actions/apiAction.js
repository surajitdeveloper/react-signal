import { api } from '../../Api/Api'

import { API_CALL, API_ERROR } from '../../Config/constant'

export const apiCallAction = async (dispatch, apiName, data = {}) => {
  // dispatch, LOGIN_API, data

  const apiDetails = API_CALL.find((e) => e.NAME === apiName)

  apiDetails.PAYLOAD = data

  // console.log(apiDetails)

  try {
    const response = await api(apiDetails)
    apiDetails.DATA = { ...response }
    return dispatch({
      type: apiDetails.AFTER_ACTION,
      payload: { ...response }
    })
  } catch (error) {
    // console.log(error)
    apiDetails.DATA = {code: error.code, message: error.response.data.message}
    // console.log(apiDetails)
    dispatch({
      type: apiDetails.AFTER_ACTION,
      payload: { ...apiDetails.EMPTY_DATA }
    })
    return dispatch({
      type: API_ERROR,
      payload: {apiData:  {...apiDetails.DATA}}
    })
  }
}
