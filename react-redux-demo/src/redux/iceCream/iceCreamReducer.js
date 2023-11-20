import { BUY_ICE_CREAM } from "./iceCreamType";

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
