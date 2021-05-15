import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import {Search} from "./search";


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
  
    document.getElementById('save').style.display = "block";
    document.getElementById('savedmsg').style.display = "none";
  
    }).catch(err => console.log(err));
  }

//post function needs to be reworked.
function save () {
  axios.post("http://localhost:3000/saved", document.getElementById('content').value)
  .then(function(response){
    document.getElementById('savedcont').innerHTML = response; 
    });
    document.getElementById('savedmsg').style.display = "block";
  };
//===================CLOSE FUNCTION FOR DIALOG BOX====================================//
  function close () {
    document.getElementById('dialogbox').style.display = 'none';
    document.getElementById('dialogoverlay').style.display = 'none';
  }

  //================ABOUT DIALOG BOX DISPLAY FUNCTION=================================//
  function about () {
    document.getElementById('dialogbox').style.display = 'block';
    document.getElementById('dialogoverlay').style.display = 'block';
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
              {/* <Link
                to="/saved" id = "saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
              >
                Saved
              </Link> */}

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
              <Link
                to="/saved" id = "saved2"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
              >
              Log In/Sign Up
              </Link>

              <button id = "about" onClick ={about}>About</button>

            </ul>        
          </div>      
        </nav>
      </div>

      <div id ="content">
      </div>
      <br></br>
      <button id = "save" onClick = {save}>Save</button>
      <div id = "savedmsg">Saved!</div>
{/* ABOUT DIALOG BOX============================================================= */}
      <div id ="dialogoverlay"></div>
      <div id= "dialogbox">
        <div>
          <div id ="dialogboxhead" style = {{textAlign: "center"}}>About</div>
          <div id ="dialogboxbody">Welcome to Google Books Search! On this page, you can search for any book title provided by Google. Login or sign-up to save your book selections to build your own collection.</div>
          <div id ="dialogboxfoot">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Navbar;
