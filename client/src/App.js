import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <div>
        <Navbar />
        </div>
    </Router>
  );
}

export default App;
