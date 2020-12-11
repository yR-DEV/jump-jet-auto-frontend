// Dependency imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Style imports
import './App.css';

// Component imports
import Header from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Employee from './components/employee/Employee';
import EmployeeForm from './components/employee/EmployeeForm';
import VehicleService from './components/vehicle/VehicleService';
import AddVehicle from './components/vehicle/AddVehicle';
import Customer from './components/customer/Customer';
import Appointment from './components/appointment/Appointment';
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
        <Route path="/employees">
          <Employee setEmployeeToAppState={setEmployeeToAppState}/>
        </Route>
        <Route path="/add-employee">
          <EmployeeForm />
        </Route>
        <Route path="/vehicles">
          <VehicleService />
        </Route>
        <Route path="/add-vehicle">
          <AddVehicle />
        </Route>
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/jobcards">
          <ListJobCardsComponent />
        </Route>
        <Route path="/add-jobcard">
          <CreateJobCardComponent />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Router>
    </div>
  );
}

export default App;
