import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Achievements from "./components/Achievements/Achievements";
import "./App.css";
import Education from "./components/Education/Education";
import Techstack from "./components/Techstack/Techstack";
import Portfolio from "./components/Portfolio/Portfolio";
import E from "./components/Endorsment/Endorsment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Achievements/>
      <Education/>
      <Techstack />
      <Portfolio />
      <E />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
