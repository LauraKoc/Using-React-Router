import React from "react";
import "./styles.css";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

import {Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/about" component = {About} />
      <Route exact path = "/contact" component = {Contact} />
      <Route exact path = "/projects" component = {Projects} />
    </div>
  );
}

export default App;
