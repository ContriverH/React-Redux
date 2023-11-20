const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore();
const combineReducers = redux.combineReducers();
const applyMiddleware = redux.applyMiddleware; // redux provides functionality to add logger
const logger = reduxLogger.createLogger(); // create this logger for using it as middleware

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// this is an action creator
// it is needed because, we want to change the action object at a single place
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Ice-cream action",
  };
}

// (prevState, action) ⇒ newState
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
