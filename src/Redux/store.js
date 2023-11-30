import { createStore, combineReducers } from 'redux';
import {submittedValueReducer} from './reducers/submittedValueReducer';
import {setWeatherReducer} from './reducers/setWeatherReducer';
import {userReducer} from './reducers/userReducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer,
    setUserToken: userReducer,
    setWeather: setWeatherReducer
});

export const store = createStore(
    allReducers,
    {
        submittedValue: '',
        setWeather: '',
        setUserToken: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
