import axios from 'axios';

const CUSTOMER_REST_API_BASEURL = ""

class CustomerService {

    getCustomers() {
        return axios.get(CUSTOMER_REST_API_BASEURL);
    }

    deleteCustomer(customerId) {
        return axios.delete(CUSTOMER_REST_API_BASEURL + '/' + customerId);
    }

    postCustomer(customerNew) {
        return axios.post(CUSTOMER_REST_API_BASEURL, customerNew);
    }

    putAppointment(customerUpdated) {
        return axios.put(CUSTOMER_REST_API_BASEURL, customerUpdated);
    }

}

export default new CustomerService();