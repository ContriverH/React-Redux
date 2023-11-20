import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div>
      <h2>{numberOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
