// React Imports
import React, { Component } from 'react';
// import MachineInput from './Machines/MachineInput';
// import Output from './Output';

import { Redirect, Route, Switch } from "react-router-dom";

// CSS Import (this style is used when testing React Components on Node.js instead of the Browser)
const canUseDOM = !!(
  (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);
if (canUseDOM) {
  require('./App.css');
}

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/home"
            render={(props) => <Home display={true} {...props} />}
          />
          <Route path="./order" componenet={placingOrder}/>

          <Redirect to="/login" />
          {/* <Route path="/notification" component={Notification} />
          <Route path="/sellerhome" component={SellerHomePage} /> */}
        </Switch>
        {/* <MachineInput defaultInput={''}/>
        <Output /> */}
      </div>
    );
  }
}

export default App;