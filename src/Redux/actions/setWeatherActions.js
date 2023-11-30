import { SET_WEATHER } from "../constant"
export const setWeather = (data) => {
    // console.log("weather action --->", data)
    return {
        type: SET_WEATHER,
        payload: {
            setWeather: data
        }
    }
}