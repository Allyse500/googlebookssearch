import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


// import SearchForm from "../SearchForm";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

function search () {
  var input = document.getElementById('term').value;
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input.split(" ").join("+")+"&" + process.env.REACT_APP_APIKEY)
  .then(function(response){
  var myJSON = JSON.stringify("Title: " + response.data.items[0].volumeInfo.title + "<br><br>" +
   "Authors: " + response.data.items[0].volumeInfo.authors[0] + "<br><br>" +
   "Description: " + response.data.items[0].volumeInfo.description + "<br><br>" +
   "Image: <br><br>" + "<img src='" + response.data.items[0].volumeInfo.imageLinks.thumbnail+ "'" + "<br><br><br><br>" + 
   "Link: " + "<a href='" + response.data.items[0].volumeInfo.previewLink + "'>" + response.data.items[0].volumeInfo.previewLink + "</a>");
  document.getElementById("content").innerHTML = myJSON;
  }).catch(err => console.log(err));
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
      <br></br>
      <button id = "save">Save</button>
    </div>
  );
}

export default Navbar;
