import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";


function App() {
  const style = {
  backgroundColor: "rgb(253, 1, 1)",
  height: "150px",
  padding: "20px",
  color: "white",
  fontSize: "120%",
  display:"grid",
  gridTemplateColumns: "repeat(5, auto)",
  gridGap: "3px",
  listStyle: "none",
  textAlign: "right",
  // width: "70vw",
  // justifyContent: "end",
  // marginRight: "2rem",
  };
  document.title = "Google Books Search";
  return (
    <div>
        <Router>
          <div style ={style}>
            {/* <Navbar /> */}
            <h3>Google Books Search</h3>
            <p>Search</p>
            <p>Saved</p>
          {/* <Route exact path="/" component={Search}></Route>
          <Route exact path="/Search" component={Search}>Search</Route>
          <Route exact path="/Saved" component={Saved}>Saved</Route> */}
          </div>
          <p className="App-intro">
            Search for and save books.
          </p>
        </Router>
    </div>
  );
}


export default App;
