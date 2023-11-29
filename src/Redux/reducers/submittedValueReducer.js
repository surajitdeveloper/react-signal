import { SUBMIT_VALUE } from '../actions/submittedValueActions';
import { SET_WEATHER } from "../actions/setWeatherActions";
export default function submittedValueReducer(state = null, action) {

    // console.log("state --->", state)
    // console.log("action --->", action)

    switch (action.type) {
        case SUBMIT_VALUE:
            return action.payload.submittedValue;
        case SET_WEATHER:
            return action.payload.setWeather
        default:
            return state;
    }
}