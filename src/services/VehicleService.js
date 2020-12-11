import axios from 'axios';

const VEHICLE_REST_API_BASEURL = "http://localhost:8080/api/vehicles"

class VehicleService {

    getVehicles() {
        return axios.get(VEHICLE_REST_API_BASEURL);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_REST_API_BASEURL + '/' + vehicleId);
    }

    postVehicle(vehicleNew) {
        return axios.post(VEHICLE_REST_API_BASEURL, vehicleNew);
    }

    putVehicle(vehicleUpdated) {
        return axios.put(VEHICLE_REST_API_BASEURL, vehicleUpdated);
    }

}

export default new VehicleService();