import { BUY_ICE_CREAM } from "./iceCreamType";

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "buy the ice-cream",
  };
};
