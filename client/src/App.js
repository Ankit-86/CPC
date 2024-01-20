import "./App.css";
import "./style.css";
import "./stylesheet.css";
import React, { useEffect } from "react";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import Video from "./pages/Video";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

import Build from "./pages/Build";

import Visualize from "./pages/Visualize";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Visualisations from "./components/Visualize/Visualisations";

// import Explain from "./pages/Explain";

import Contests from "./pages/Contests";

import alanBtn from "@alan-ai/alan-sdk-web";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Analyze from "./pages/Analyze";

function App() {
  useEffect(() => {
    alanBtn({
      key: process.env.ALAN_KEY,
    });
  }, []);


  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<NoMatch />} />

          <Route path="/build" element={<Build />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/visualize" element={<Visualize />} />

          <Route
            path="/visualize/sorting"
            element={<Visualisations param="bblsort" />}
          />

          <Route path="/contests" element={<Contests />} />
          <Route path="/analyze" element={<Analyze />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
