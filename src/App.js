import { Provider } from "react-redux";
import "./App.css";
import { Body } from "./components/body/body";

import CityList from "./components/city/CityList";
import { Footer } from "./components/Footer";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CityList />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
