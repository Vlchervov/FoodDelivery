import "./App.css";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
  );
};

export default App;
