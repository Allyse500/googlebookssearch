import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import SearchForm from "../SearchForm";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

function search () {
  document.getElementById('content').innerHTML = 
  document.getElementById('term').value;
}

  return (
    <div>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul className="navbar-nav">

              <Link className="navbar-brand" to="/" id= "title" style = {{color: "white", fontSize: "180%", textDecoration: "none"}}>
                Google Books Search
              </Link>
              <Link
                to="/saved" id = "saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
              >
                Saved
              </Link>

              <div id = "form">
                <form className="search">
                  <div className="form-group">
                    <label htmlFor="language" style={{fontSize: "129%"}}>Search Term:</label>
                      <input
                      name="term"
                      list="term"
                      type="text"
                      className="form-control"
                      placeholder="Type in a search term to begin"
                      id="term"
                      />
                    </div>
                </form>
                <button id = "searchbtn" onClick = {search}>Search</button> 
              </div>
            </ul>        
          </div>      
        </nav>
      </div>

      <div id ="content">
        Welcome to Search Page
      </div>
    </div>
  );
}

export default Navbar;
