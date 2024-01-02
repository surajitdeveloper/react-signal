// React Imports
import * as React from 'react'
import MachineInput from './Machines/MachineInput'
import Login from './User/Login'
import UserList from './User/UserList'
import CustomerInput from './Customer/CustomerInput'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// CSS Import (this style is used when testing React Components on Node.js instead of the Browser)
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
if (canUseDOM) {
  require('./App.css')
}

const AppRoute = () => { // { children }
  // console.log('children --->', children)
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/machine' element={<MachineInput />} />
          <Route path='/customer' element={<CustomerInput />} />
          <Route path='/list' element={<UserList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoute
