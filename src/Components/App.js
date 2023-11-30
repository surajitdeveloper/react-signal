// React Imports
import React, { Component } from 'react'
import MachineInput from './Machines/MachineInput'
import Login from './User/Login'
// import Output from './Output';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// CSS Import (this style is used when testing React Components on Node.js instead of the Browser)
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
if (canUseDOM) {
  require('./App.css')
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/machine' element={<MachineInput />} />
            {/* <Route path="*" element={<Login />} /> */}
          </Routes>
        </Router>

        {/* <MachineInput defaultInput={''}/>
        <Output /> */}
      </div>
    )
  }
}

export default App
