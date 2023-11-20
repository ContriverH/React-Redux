import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    info: "buy the cake",
    payload: number,
  };
};
