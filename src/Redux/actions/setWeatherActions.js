export const SET_WEATHER = 'SET_WEATHER';
export const setWeather = (data) => {
    return {
        type: SET_WEATHER,
        payload: {
            setWeather: data
        }
    }
}