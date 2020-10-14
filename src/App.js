import React from "react";
import Home from "./Pages/Home";
import Diensten from "./Pages/Diensten";
import "./App.css";
import Projecten from "./Pages/Projecten";
import Brochures from "./Pages/Brochures";
import Contact from "./Pages/Contact";
import Projectmanagement from "../src/Pages/SubPages/Projectmanagement";
import Bouwkundigadvies from "../src/Pages/SubPages/Bouwkundigadvies";
import Projectplanning from "../src/Pages/SubPages/Projectplanning";
import NavBar from "../src/Pages/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/">
          <NavBar />
          <Home />
          <Diensten />
          <Projecten />
          <Brochures />
          <Contact />
        </Route>
        <Route path="/Projectmanagement">
          <Projectmanagement />
        </Route>
        <Route path="/Bouwkundigadvies">
          <Bouwkundigadvies />
        </Route>
        <Route path="/Projectplanning">
          <Projectplanning />
        </Route>
      </Router>
    </div>
  );
}

export default App;
