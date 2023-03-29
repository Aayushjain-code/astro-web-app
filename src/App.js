import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import FeedBack from "./FeedBack";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Calculator />} path="/calculator" />
        <Route element={<FeedBack />} path="/feedback" />
      </Routes>
    </Router>
  );
};

export default App;
