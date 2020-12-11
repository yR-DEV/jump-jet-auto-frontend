import axios from 'axios';

const APPOINTMENT_REST_API_BASEURL = "";

class AppointmentService {

    getAppointments() {
        return axios.get(APPOINTMENT_REST_API_BASEURL);
    }

    deleteAppointment(appointmentId) {
        return axios.delete(APPOINTMENT_REST_API_BASEURL + '/' + appointmentId);
    }

    postAppointment(appointmentNew) {
        return axios.post(APPOINTMENT_REST_API_BASEURL, appointmentNew);
    }

    putAppointment(appointmentUpdated) {
        return axios.put(APPOINTMENT_REST_API_BASEURL, appointmentUpdated);
    }

}

export default new AppointmentService();