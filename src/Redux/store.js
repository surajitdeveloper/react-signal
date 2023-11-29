import { createStore, combineReducers } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';
import setWeatherReducer from './reducers/setWeatherReducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer,
    setWeather: setWeatherReducer
});

export const store = createStore(
    allReducers,
    {
        submittedValue: '',
        setWeather: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
