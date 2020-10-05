import React from "react";
import HouseDetails from "./HouseDetails";
import InventoryDetails from "./InventoryDetails";
import "./ViewMore.css";
function ViewMore() {
  return (
    <div className="viewmore">
      <InventoryDetails />
      <HouseDetails
        floorNo="0"
        elavatorAvailable="No"
        packingRequired="Yes"
        distanceFromDoor="1 meters"
        additionalInfo="No additional info"
        existingOrNewHouse="Existing"
      />
      <HouseDetails
        floorNo="1"
        elavatorAvailable="Yes"
        packingRequired="No"
        distanceFromDoor="3 meters"
        additionalInfo="No additional info"
        existingOrNewHouse="New"
      />
    </div>
  );
}

export default ViewMore;
