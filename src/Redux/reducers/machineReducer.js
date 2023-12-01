import { SAVE_MACHINE_DETAILS } from '../../Config/constant'
export const machineReducer = (state = null, action) => {
  // console.log("user reducer state --->", state)
  // console.log("user reducer action --->", action)

  switch (action.type) {
    case SAVE_MACHINE_DETAILS:
      return action.payload.machineData
    default:
      return state
  }
}
