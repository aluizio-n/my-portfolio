import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Technologies from "./Pages/Technologies";
import Sumary from "./Pages/Sumary";
import Contact from "./Pages/Contact";

function App() {
  return (
      <div className="App">
        <Menu />
        <Home />
        <About />
        <Portfolio />
        <Technologies />
        <Sumary />
        <Contact />
      </div>
  );
}

export default App;
