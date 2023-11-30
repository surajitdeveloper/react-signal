import { createStore, combineReducers } from 'redux';
import {userReducer} from './reducers/userReducer';

const allReducers = combineReducers({
    setUserToken: userReducer
});

export const store = createStore(
    allReducers,
    {
        setUserToken: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
