// This file is same as CakeContainer.js
// but, we are trying to implement the same file with the use of hooks
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake (hooks)</button>
    </div>
  );
};

export default HooksCakeContainer;
