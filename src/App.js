import "./App.css";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import Header from "./components/header";

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
