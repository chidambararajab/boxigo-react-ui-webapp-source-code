import React from "react";
import MyMoveComponent from "./MyMoveComponent.js";
import "./MyMove.css";
import InventoryDetails from "./InventoryDetails.js";
import HouseDetails from "./HouseDetails.js";

function MyMove() {
  return (
    <div className="mymove">
      <h4>My Moves</h4>
      <MyMoveComponent
        fromAddressLineOne="Ejipura Signal, 100 Feet Road, Chandra Reddy Layout,"
        fromAddressLineTwo="Ejipura, Banglore, Karnataka."
        toAddressLineOne="HAL Old Airport Road, BDA Colony, Domlur Village,"
        toAddressLineTwo="HSL Layout, Banglore, Karnataka."
        roomCount="1 BHK"
        packagesCount="32"
        kilometer="4.8km"
        date="Sep 26, 2020 at 6:18pm"
        orderID="E21418"
      />
      <MyMoveComponent
        fromAddressLineOne="Ejipura Signal, 100 Feet Road, Chandra Reddy Layout,"
        fromAddressLineTwo="ST Bed Layout, Ejipura, Banglore, Karnataka."
        toAddressLineOne="HAL Old Airport Road, BDA Colony, Domlur Village,"
        toAddressLineTwo="HSL Layout, Banglore, Karnataka."
        roomCount="3 + BHK"
        packagesCount="82"
        kilometer="7.2km"
        date="Sep 16, 2020 at 7:28pm"
        orderID="E41057"
      />
      <MyMoveComponent
        fromAddressLineOne="Ejipura Signal, 100 Feet Road, Chandra Reddy Layout,"
        fromAddressLineTwo="Ejipura, Banglore, Karnataka"
        toAddressLineOne="HAL Old Airport Road, BDA Colony, Domlur Village,"
        toAddressLineTwo="HSL Layout, Banglore, Karnataka."
        roomCount="2 + BHK"
        packagesCount="32"
        kilometer="5.8km"
        date="Sep 06, 2020 at 6:00pm"
        orderID="E12012"
      />
    </div>
  );
}

export default MyMove;
