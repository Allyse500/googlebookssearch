import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Saved from "./components/Navbar/saved";
import Search from "./components/Navbar/search";


function App() {
  document.title = "Google Books Search";
  const style = {
    backgroundColor: "red",
    color: "white"
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
