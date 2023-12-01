// Other Imports
import './index.css'
import * as serviceWorker from './serviceWorker'

// React Imports
import React from 'react'
// import ReactDOM from 'react-dom';
import AppRoute from './Components/AppRoute'
import { createRoot } from 'react-dom/client'

// Redux Imports
import { Provider } from 'react-redux'
import { store } from './Redux/store'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
