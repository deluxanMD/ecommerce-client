import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// General components
import Navbar from "./components/general/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <p>App JS</p>
      </div>
    </Router>
  );
};

export default App;
