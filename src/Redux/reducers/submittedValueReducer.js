import { SET_WEATHER, SUBMIT_VALUE } from "../constant";
export const submittedValueReducer = (state = null, action) => {
    console.log("submit reducer state --->", state)
    console.log("submit reducer action --->", action)

    switch (action.type) {
        case SUBMIT_VALUE:
            return action.payload.submittedValue;
        case SET_WEATHER:
            return action.payload.setWeather
        default:
            return state;
    }
}