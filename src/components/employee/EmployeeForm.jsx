import React from 'react';

import './Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = () => {


    return (
        <div className="container">
            <h1>New Employee Form</h1>
            <div className="container-sm">
                <form>
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
                </form>
            </div>
        </div>
    )
}

export default EmployeeForm;