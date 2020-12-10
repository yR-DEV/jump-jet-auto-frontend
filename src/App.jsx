// Dependency imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Style imports
import './App.css';

// Component imports
import Header from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Employee from './components/employee/Employee';
import Vehicle from './components/vehicle/Vehicle';
import Customer from './components/customer/Customer';
import Appointment from './components/appointment/Appointment';
// import JobCard from './components/jobcard/JobCard';
import ListJobCardsComponent from './components/jobcard/ListJobCardsComponent';
import CreateJobCardComponent from './components/jobcard/CreateJobCardComponent';

const App = () => {

  const [state, setState] = useState([]);

  const setEmployeeToAppState = (employeeId) => {
    console.log('-------------------------------------------');
    console.log('we in main app with  ');
    console.log('EMPLOYEE ID NUMBER: ' + employeeId);
    console.log('this will be set in state and work progression of creating job card');
    console.log('will continue below');
    console.log('--------------------------------------------');
  }

  return (
    <div className="App">
      <Router>
        {/* Links to pages located in the Header Component */}
        <Header />

        <Route path="/employee">
          <Employee setEmployeeToAppState={setEmployeeToAppState}/>
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
        {/* <Route path="/jobcard">
          <JobCard />
        </Route> */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/jobcards">
          <ListJobCardsComponent />
        </Route>
        <Route path="/add-jobcard">
          <CreateJobCardComponent />
        </Route>
      </Router>
    </div>
  );
}

export default App;
