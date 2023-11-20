import React, { useState } from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const NewCakeContainer = ({ numberOfCakes, buyCake }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>{numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy Number Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
