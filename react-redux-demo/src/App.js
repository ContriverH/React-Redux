import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Containers/CakeContainer";
import IceCreamContainer from "./Containers/IceCreamContainer";
import HooksCakeContainer from "./Containers/HooksCakeContainer";
import NewCakeContainer from "./Containers/NewCakeContainer";
import ItemContainer from "./Containers/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
