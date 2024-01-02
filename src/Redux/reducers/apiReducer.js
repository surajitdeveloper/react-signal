import { FETCHING_DATA } from '../../Config/constant'
export const machineReducer = (state = null, action) => {
  // console.log("user reducer state --->", state)
  // console.log("user reducer action --->", action)

  switch (action.type) {
    case FETCHING_DATA:
      return {}
    default:
      return state
  }
}
