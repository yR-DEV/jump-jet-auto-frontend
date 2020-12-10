import React, { useState } from 'react';
import axios from 'axios';

import EmployeeList from './EmployeeList';
// import EmployeeForm from './EmployeeForm';

import './Employee.css';

const Employee = (props) => {

    const [state, setState] = useState([]);

    const getAPIAxios = () => {
      axios.get('http://localhost:6064/employee/')
        .then(response => {
          setState(response.data);
        });
    }

    const clearState = () => {
        setState([]);
      }

    const handleEmployeeSelect = (id) => {
        props.setEmployeeToAppState(id);
    }   

    return (
        <div className="container">
            <br></br>
            <div className="jumbotron">
                <div className="row">
                </div>
                <div className="container">
                </div>
                <EmployeeList clearState={clearState} getAPIAxios={getAPIAxios} employees={state} handleEmployeeSelect={handleEmployeeSelect}/>
            </div>
        </div>
    )
}

export default Employee;