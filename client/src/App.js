import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  document.title = "Google Books Search";
  const style = {
    backgroundColor: "red",
    color: "white"
  }
  return (
    <Router>
      <div style ={style}>
        <Navbar />
        </div>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
