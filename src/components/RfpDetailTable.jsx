import React from "react";

const data = [
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Nagpur",
    ToState: "Maharashtra",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Pune",
    ToState: "Maharashtra",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Gaziabad",
    ToState: "UttarPradesh",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Gaziabad",
    ToState: "Karnataka",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Gaziabad",
    ToState: "Karnataka",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Pune",
    ToState: "Bihar",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Pune",
    ToState: "Karnataka",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
  {
    FromCity: "Rajkot",
    FromState: "Gujrat",
    ToCity: "Pune",
    ToState: "Haryana",
    VehicleType: "FLATBEDT-9",
    Onewayroundtrip: "One way trip",
    Remark1: "",
    RateUOM: "BARa",
  },
];

const RfpDetailTable = () => {
  return (
    <>
      <div id="tableSec">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th scope="col">From City</th>
              <th scope="col">From State</th>
              <th scope="col">To City</th>
              <th scope="col">To State</th>
              <th scope="col">Vehicle Type</th>
              <th scope="col">Round Trip</th>
              <th scope="col">Remark 1</th>
              <th scope="col">Rate UOM</th>
              <th scope="col">BA Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rfp, index) => (
              <tr key={index}>
                <td>{rfp.FromCity}</td>
                <td>{rfp.FromState}</td>
                <td>{rfp.ToCity}</td>
                <td>{rfp.ToState}</td>
                <td>{rfp.VehicleType}</td>
                <td>{rfp.Onewayroundtrip}</td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
      </div>
      <div id="rfpdetailbottom">
        <div>Cancel</div>
        <div>
          <button type="button" class="btn btn-danger">
            Submit Rates
          </button>
        </div>
      </div>
    </>
  );
};

export default RfpDetailTable;
