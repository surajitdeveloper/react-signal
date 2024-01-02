import { FETCHING_DATA, API_ERROR } from '../../Config/constant'
export const machineReducer = (state = null, action) => {
  // console.log("user reducer state --->", state)
  // console.log("user reducer action --->", action)

  switch (action.type) {
    case FETCHING_DATA:
      return action.payload.apiData
    case API_ERROR:
      return action.payload.apiData
    default:
      return state
  }
}
