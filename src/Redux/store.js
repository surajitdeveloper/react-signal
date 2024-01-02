import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './reducers/userReducer'
import { machineReducer } from './reducers/machineReducer'
import { thunk } from 'redux-thunk'
const allReducers = combineReducers({
  token: userReducer,
  machineData: machineReducer
})

export const store = createStore(
  allReducers,
  {
    token: '',
    machineData: {
      machineName: '',
      sites: 0,
      subModule: 0,
      machineType: 0
    }
  },
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
