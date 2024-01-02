import { api } from '../../Api/Api'

import { API_CALL } from '../../Config/constant'

export const apiCallAction = async (dispatch, apiName, data = {}) => {
  // dispatch, LOGIN_API, data

  const apiDetails = API_CALL.find((e) => e.NAME === apiName)

  apiDetails.PAYLOAD = data

  // console.log("apidetails --->", apiDetails)

  try {
    // console.log("api call start")
    const response = await api(apiDetails)
    apiDetails.DATA = { ...response }
    // console.log("response --->", response)
    return dispatch({
      type: apiDetails.afterApiAction,
      payload: { ...response }
    })
  } catch (error) {
    console.log(error)
    return dispatch({
      type: '',
      payload: {}
    })
  }
}
