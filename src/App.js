import React from "react";
import "./styles.css";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

import { Route } from "react-router-dom";
import NavBar from "./Navbar";
import ItemDetail from './ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route  path="/projects/:id" component={ItemDetail} />
    </div>
  );
}

export default App;
