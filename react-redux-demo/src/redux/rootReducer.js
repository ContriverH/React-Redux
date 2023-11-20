import { combineReducers } from "redux";

import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

export const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
});
