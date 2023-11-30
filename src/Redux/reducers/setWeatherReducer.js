
import { SET_WEATHER, SET_USER_TOKEN } from "../constant";
export const setWeatherReducer = (state = null, action) => {
    console.log("weather reducer state --->", state)
    console.log("weather reducer action --->", action)

    switch (action.type) {
        case SET_WEATHER:
            return action.payload.setWeather
        default:
            return state;
    }
}