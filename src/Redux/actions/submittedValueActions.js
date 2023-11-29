
export const SUBMIT_VALUE = 'SUBMIT_VALUE';


export const submitValue =  (input) => {
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}