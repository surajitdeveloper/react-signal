import { SUBMIT_VALUE } from "../constant"
export const submitValue =  (input) => {
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}