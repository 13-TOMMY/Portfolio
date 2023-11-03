import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import { ThemeContext } from "./context/ThemeContext";
import Footer from "./components/Footer/Footer";
import BackgroundSVG from "./components/BackgroundSVG";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode ? "dark-mode-viewArea app" : "light-mode-viewArea app"
        }
      >
        <div className="background-svg-app">
          <BackgroundSVG />
        </div>
        <div>
          <div className=" viewable-area">
            <div className="left-side">
              <Header />
            </div>
            <div className="right-side">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Homepage />} />
              </Routes>
              <div className="app-footer-container">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
