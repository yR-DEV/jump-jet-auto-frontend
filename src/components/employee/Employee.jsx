import React, { useState } from 'react';
import axios from 'axios';

import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

import './Employee.css';

const Employee = () => {

    const [state, setState] = useState([]);

    const getAPIAxios = () => {
      axios.get('http://localhost:6064/employee/')
        .then(response => {
          // console.log(response.data); - WORKING
          setState(response.data);
        });
    }

    return (
        <div class="jumbotron">
            Employee hooked up
            <EmployeeList />
            <EmployeeForm />
        </div>
    )
}

export default Employee;