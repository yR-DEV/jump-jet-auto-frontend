import React from 'react';

import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const Employee = () => {


    return (
        <h1>
            Employee hooked up
            <EmployeeList />
            <EmployeeForm />
        </h1>
    )
}

export default Employee;