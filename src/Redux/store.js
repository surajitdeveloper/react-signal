import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { machineReducer } from './reducers/machineReducer'

const allReducers = combineReducers({
  setUserToken: userReducer,
  machineData: machineReducer
})

export const store = createStore(
  allReducers,
  {
    setUserToken: '',
    machineData: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
