import React, { useEffect } from 'react';

const EmployeeList = (props) => {

    useEffect(() => {
        props.getAPIAxios();
        return () => props.clearState();
    }, []);

    const employeeSelect = (event) => {
        props.handleEmployeeSelect(event.target.id);
    }

    return (
        <div className="container">
            <h1> Employees List </h1>
            <table className="container">
                <tbody>
                    {
                    props.employees.map(employee => {
                        return (
                            <tr className="row" key={employee.employeeId}>
                                    <td className="col-2">{employee.employeeId}</td>
                                    <td className="col-2">{employee.employeeFirstName} {employee.employeeLastName}</td>
                                    <td className="col-2">{employee.employeePhoneNumber}</td>
                                    <td className="col-2">{employee.employeeTitle}</td>
                                    <td className="col-2"><button className="btn btn-primary" id={employee.employeeId} onClick={employeeSelect}>Select Employee</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;