import React from "react";
import { connect } from "react-redux";

const ItemContainer = ({ item }) => {
  return (
    <div>
      <h2>Item - {item}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
