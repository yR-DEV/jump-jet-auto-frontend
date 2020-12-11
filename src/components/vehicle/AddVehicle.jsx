import React from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

function AddVechicle() {

  const submit = e => {
    let vin = e.target[0].value;
    let brand = e.target[1].value;
    let model = e.target[2].value;
    let year = e.target[3].value;
    let mileage = e.target[4].value;
    let color = e.target[5].value;
    let data = {
      vin,
      brand,
      model,
      year,
      mileage,
      color
    };
    postVehicle(data);
  };

  const postVehicle = data => {
    axios.post("http://localhost:8080/api/add/vehicle", data)
  };

  return (
    <div className="vechicleService">
      <form onSubmit={e =>{
        e.preventDefault();
        submit(e);
      }}>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> VIN </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="vin" name="vin" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> Brand </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="brand" name="brand" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> Model </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="model" name="model" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> Year </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="year" name="year" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> Mileage </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="mileage" name="mileage" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"> Color </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="color" name="color" />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
}

export default AddVechicle;
