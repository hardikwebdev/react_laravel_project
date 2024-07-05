import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import We_sell from "./page/car_info.js";
import Home from "../src/page/Home.js";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/we-sell" element={<We_sell />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
