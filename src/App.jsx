import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Employee from './components/employee/Employee';
import Vehicle from './components/vehicle/Vehicle';
import Customer from './components/customer/Customer';
import Appointment from './components/appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Links to pages located in the Header Component */}
        <Header />

        <Route path="/employee">
          <Employee />
        </Route>
        <Route path="/vehicle">
          <Vehicle />
        </Route>
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Router>
    </div>
  );
}

export default App;
