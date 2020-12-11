import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

import './Employee.css';

const Employee = (props) => {

    const [state, setState] = useState([]);

    const getAPIAxios = () => {
      axios.get('http://localhost:6064/employee/')
        .then(response => {
          setState(response.data);
        });
    }

    const deleteAPIAxios = (employeeId) => {
        axios.delete(`http://localhost:6064/employee/${employeeId}`)
            .then(response => {
                getAPIAxios();
                console.log(response);
            });
    }

    const clearState = () => {
        setState([]);
      }

    const showEmployeeForm = () => {
        console.log('Show New Employee Form Button Clicked');
    }

    const showEmployeeList = () => {

    }

    const handleAddEmployee = () => {
        console.log('Add Employee Clicked');
    }

    const handleManageEmployee = () => {

    }

    const handleEmployeeSelect = (id) => {
        props.setEmployeeToAppState(id);
    }   

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="container">Welcome to the Employee Service!</h1>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary">Manage Employees</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary" >Select Employee For Job Card</button>
                    </div>
                    <div className="col-4">
                        <Link to="/add-employee">
                            <button className="btn btn-primary">Add a New Employee</button>
                        </Link>
                    </div>
                </div>
            </div>
            <EmployeeList clearState={clearState} 
                            getAPIAxios={getAPIAxios} 
                            employees={state} 
                            handleEmployeeSelect={handleEmployeeSelect}
                            deleteAPIAxios={deleteAPIAxios}
            />
        </div>
    )
}

export default Employee;