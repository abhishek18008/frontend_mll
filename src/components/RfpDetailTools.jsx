import React from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RfpDetailTools = () => {
  const { rfpId } = useParams();

  return (
    <div className="center" id="rfpdetailtools">
      <div className="center">
        <ArrowBackIcon />
        <div className="">
          <div className="">
            <p className="">RFP Code</p>
            <h6 className="">{rfpId}</h6>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="rfpdetailtoolsbuttons">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
        </div>
        <div className="rfpdetailtoolsbuttons">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
        </div>
        <div className="rfpdetailtoolsbuttons">
          <button type="button" class="btn btn-primary">
            Download Agreement
          </button>
        </div>
        <div className="rfpdetailtoolsbuttons">
          <button type="button" class="btn btn-success">
            Upload RFP Excel
          </button>
        </div>
        <div className="rfpdetailtoolsbuttons">
          <button type="button" class="btn btn-primary">
            Download RFP Template
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default RfpDetailTools;
