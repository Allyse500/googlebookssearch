import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SearchForm from "../SearchForm";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div>
        <ul className="navbar-nav">

        <Link className="navbar-brand" to="/" id= "title" style = {{color: "white", fontSize: "180%", textDecoration: "none"}}>
        Google Books Search
      </Link>

          {/* <li className="nav-item"> */}
            <Link
              to="/" id = "search"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
            >
              Search
            </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
            <Link
              to="/saved" id = "saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
            >
              Saved
            </Link>
          {/* </li> */}
          <SearchForm />
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
