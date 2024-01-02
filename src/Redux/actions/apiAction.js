import { api } from '../../Api/Api'

import { API_CALL } from '../../Config/constant'

export const apiCallAction = async (dispatch , apiName, data = {}) => { // dispatch, LOGIN_API, data



  const apiDetails = API_CALL.find(e=>e.NAME === apiName)




  return async dispatch => {
    try {
      const response = await api(apiDetails);
      return dispatch({
        type: apiDetails.afterApiAction,
        payload: response
      });
    }
    catch(error) {
      return dispatch({
        type: '',
        payload: {}
      });
    }

    // return 'done';
  }

}