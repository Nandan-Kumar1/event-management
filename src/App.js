import "./App.css";
import { newsData } from "./data/news";

import Header from "./components/Header";
import IntroComponent from "./components/IntroComponent";
import Clubs from "./components/Clubs";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroComponent />
      <Clubs />
      <Events />
      <Footer />
    </>
  );
}

export default App;
