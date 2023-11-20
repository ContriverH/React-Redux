import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";

const IceCreamContainer = ({ numberOfIceCreams, buyIceCream }) => {
  return (
    <div>
      <h2>{numberOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
