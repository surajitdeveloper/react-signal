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
    machineData: {
      machineName: '',
      sites: 0,
      subModule: 0,
      machineType: 0
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
