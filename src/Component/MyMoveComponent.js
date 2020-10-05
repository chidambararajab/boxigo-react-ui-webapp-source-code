import React from "react";
import "./MyMoveComponent.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import PinDropRoundedIcon from "@material-ui/icons/PinDropRounded";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import SwapHorizontalCircleRoundedIcon from "@material-ui/icons/SwapHorizontalCircleRounded";
import InventoryDetails from "./InventoryDetails.js";
import HouseDetails from "./HouseDetails.js";
import { Link } from "react-router-dom";

let viewTab = "";

viewTab = (
  <div>
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

function MyMoveComponent({
  fromAddressLineOne,
  fromAddressLineTwo,
  toAddressLineOne,
  toAddressLineTwo,
  roomCount,
  packagesCount,
  kilometer,
  date,
  orderID,
}) {
  return (
    <div className="mymovecomponent">
      <div className="mymovecomponent_from_full">
        <div className="mymovecomponent_fromTop">
          <div className="mymovecomponent_com">
            <div>
              <p className="mymovecomponent_fromTop_from">
                <strong>From</strong>
              </p>
              <small>
                <p>
                  {fromAddressLineOne}
                  <br className="mymovecomponent_brake" />
                  {fromAddressLineTwo}
                </p>
              </small>
            </div>
            <div className="mymovecomponent_arrow">
              <SwapHorizontalCircleRoundedIcon className="icon_direction" />
            </div>
            <div className="mymovecomponent_toTop">
              <p>
                <strong>To</strong>
              </p>
              <small>
                <p>
                  {toAddressLineOne}
                  <br className="mymovecomponent_brake" />
                  {toAddressLineTwo}
                </p>
              </small>
            </div>
            <div className="mymovecomponent_lastTop">
              <p>
                <strong>Request#</strong>
              </p>
              <small>
                <p className="mymovecomponent_orderID">
                  <strong>{orderID}</strong>
                </p>
              </small>
            </div>
          </div>
        </div>
        <div className="mymovecomponent_fromBottom">
          <div className="mymovecomponent_fromBottom_one">
            <div className="icon_mymovecomponentLine">
              <HomeRoundedIcon className="icon" />
              <p className="mymovecomponent_info">{roomCount}</p>
              <CategoryRoundedIcon className="icon" />
              <p className="mymovecomponent_info">{packagesCount}</p>
              <PinDropRoundedIcon className="icon" />
              <p className="mymovecomponent_info">{kilometer}</p>
              <EventNoteRoundedIcon className="icon" />
              <p className="mymovecomponent_info">
                {date}
                <CreateTwoToneIcon className="icon_edit" />
              </p>
              <p>
                <input
                  type="checkbox"
                  id="test1"
                  className="mymovecomponent_checkbox"
                  checked
                />
                <label for="test1">Is flexible</label>
              </p>
            </div>

            <div className="mymovecomponent_toLast">
              <Link to="/viewmore">
                <button onClick="view" className="mymovecomponent_buttonOne">
                  View More Details
                </button>
              </Link>
            </div>

            <div className="mymovecomponent_lastBottom">
              <button className="mymovecomponent_buttonTwo">
                Quotes Awaiting
              </button>
            </div>
          </div>

          <div className="mymovecomponent_fromBottom_two">
            <ReportProblemRoundedIcon className="icon_disclaimer" />
            <small>
              <p className="mymovecomponent_info">
                <strong>Disclaimer: </strong>Please Upgrade your move date
                before two days of shifting.
              </p>
            </small>
          </div>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMoveComponent;
