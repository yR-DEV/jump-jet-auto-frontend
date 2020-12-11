import axios from 'axios';

const EMPLOYEES_REST_API_BASEURL = "http://localhost:6064/employee";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEES_REST_API_BASEURL);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEES_REST_API_BASEURL + '/' + employeeId);
    }

    postEmployee(employeeNew) {
        return axios.post(EMPLOYEES_REST_API_BASEURL, employeeNew);
    }

    putEmployee(employeeUpdated) {
        return axios.put(EMPLOYEES_REST_API_BASEURL, employeeUpdated);
    }

}

export default new EmployeeService();