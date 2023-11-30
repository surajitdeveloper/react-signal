import { SUBMIT_VALUE } from "../constant"
export const submitValue =  (input) => {
    // console.log("submit action --->", input)
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}