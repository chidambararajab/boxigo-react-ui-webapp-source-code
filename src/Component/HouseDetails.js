import React from "react";
import "./HouseDetails.css";

function HouseDetails({
  floorNo,
  elavatorAvailable,
  packingRequired,
  distanceFromDoor,
  additionalInfo,
  existingOrNewHouse,
}) {
  return (
    <div className="housedetails">
      <div className="houseDetails_topDetails">
        <div>
          <h4>House Details</h4>
        </div>
        <div className="houseDetails_buttonDiv">
          <button className="houseDetails_button">Edit Inventory</button>
        </div>
      </div>

      <h4 className="houseDetails_subTitle">
        {existingOrNewHouse} House Details
      </h4>
      <div className="houseDetails_houseDetails">
        <p className="houseDetails_details">
          <strong>Floor No.</strong>
          <br />
          {floorNo}
        </p>
        <p className="houseDetails_details">
          <strong>Elevator Available</strong>
          <br />
          {elavatorAvailable}
        </p>
        <p className="houseDetails_details">
          <strong>Packing Required</strong>
          <br />
          {packingRequired}
        </p>
        <p className="houseDetails_details">
          <strong>Distance from truck to door</strong>
          <br />
          {distanceFromDoor}
        </p>
      </div>
      <div>
        <p className="houseDetails_additional">
          <strong>Additional Information</strong>
          <br />
          {additionalInfo}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default HouseDetails;
