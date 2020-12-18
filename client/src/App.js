import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <div className="App">
          <div className="App-header">
          <h2>Google Books Search</h2>
          </div>
          <p className="App-intro">
            Search for and save books.
          </p>
          </div>
        </Router>
    </div>
  );
}


export default App;
