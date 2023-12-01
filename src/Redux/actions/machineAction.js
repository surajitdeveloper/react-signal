import { SAVE_MACHINE_DETAILS } from '../../Config/constant'
export const machineAction = (machineData) => {
  // console.log("user Action --->", machineData)
  return {
    type: SAVE_MACHINE_DETAILS,
    payload: {
      machineData: machineData
    }
  }
}
