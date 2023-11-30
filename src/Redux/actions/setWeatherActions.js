import { SET_WEATHER } from "../constant"
export const setWeather = (data) => {
    return {
        type: SET_WEATHER,
        payload: {
            setWeather: data
        }
    }
}