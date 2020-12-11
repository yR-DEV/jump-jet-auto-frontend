import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import employeeComponent from './Employee';

import './Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        let employee = {
            employeeId: event.target.employeeId.value,
            employeeLastName: event.target.employeeLastName.value,
            employeeFirstName: event.target.employeeFirstName.value,
            employeePhoneNumnber: event.target.employeePhoneNumber.value,
            employeeTitle: event.target.employeeTitle.value
        };
        postAPIAxios(employee);
    }

    const postAPIAxios = (employee) => {
        axios.post('http://localhost:6064/employee/', employee)
            .then(response => {
                console.log('posted');
            })
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>New Employee Form</h1>
                <div className="container-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="employeeId" className="form-label">Employee ID: </label>
                            <input type="number" className="form-control" id="employeeId" name="employeeId" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeLastName" className="form-label">Employee Last Name: </label>
                            <input type="text" className="form-control" id="employeeLastName" name="employeeLastName" aria-describedby="employeeLastNameHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeFirstName" className="form-label">Employee First Name: </label>
                            <input type="text" className="form-control" id="employeeFirstName" name="employeeFirstName" aria-describedby="employeeFirstNameHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeePhoneNumber" className="form-label">Employee Phone Number: </label>
                            <input type="text" className="form-control" id="employeePhoneNumber" name="employeePhoneNumber" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeTitle" className="form-label">Employee Title: </label>
                            <input type="text" className="form-control" id="employeeTitle" name="employeeTitle" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit New Employee</button>
                        <Link to="/employees">
                            <button className="btn btn-danger">Cancel New Employee</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm;