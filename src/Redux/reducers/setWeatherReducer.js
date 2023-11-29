
import { SET_WEATHER } from "../actions/setWeatherActions";
export default function setWeatherReducer(state = null, action) {
    // console.log("state --->", state)
    // console.log("action --->", action)

    switch (action.type) {
        case SET_WEATHER:
            return action.payload.setWeather
        default:
            return state;
    }
}