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
    var myJSON = JSON.stringify(
    "<div id = 'rsp'><img id = 'img' class ='align' src='" + response.data.items[0].volumeInfo.imageLinks.thumbnail+ "'"  + ">" +
    "<div id = 'info'><h1>" + response.data.items[0].volumeInfo.title + "</h1>" +
     "<div class = 'align' id ='info2'><div><h3>Author(s):</h3> " + response.data.items[0].volumeInfo.authors[0] + "</div><br>" +
     "<div><h3 id = 'description'>Description:</h3> " + response.data.items[0].volumeInfo.description + "</div>" +
     "<br>" + "<div><h3>URL: </h3>" + "<a id='link' href='" + response.data.items[0].volumeInfo.previewLink + "'></div>" 
     + response.data.items[0].volumeInfo.previewLink + "</a>" + "</div></div></div>");
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

//=================CANCEL FUNCTION FOR SIGN-IN AND REGISTER BOXES=======================//
  function cancel () {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('dialogoverlay').style.display = 'none';
    document.getElementById('searchfield').style.display = 'flex';
  }

//==============BEGIN LOGIN FUNCTION FOR SIGN-IN=========================================//
  function beginlogin () {//need to enable dialog overlay
    document.getElementById('dialogoverlay').style.display ="block";
    document.getElementById('dialogoverlay').style.height ="auto";
    document.getElementById('signin').style.display = 'block';
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

              <button id = "about" onClick ={about}>About</button>

              <Link
                to="/saved" id = "saved2"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
              >
              Sign Up
              </Link>

              <button id = "login" onClick = {beginlogin}>Login</button>

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
            <button onClick={close} id ="aboutCB">Close</button>
          </div>
        </div>
      </div>
{/* LOGIN DIALOG BOX============================================================= */}
<div className="Login" id= "signin">
      <div>
        <div id ="signinhead">Login</div>
          <div id ="signinbody">

      <form> {/*Changed Form--> form*/}
        <div size="lg" controlId="email">
          <label>Email</label>
          <input
            id = "sie"
            type="text"
            style={{borderRadius: "5px", transform: "trasnlateY(-15%)"}}             
          />
        </div>
        <div size="lg" controlId="password">
          <label>Password</label>
          <input
            id = "sip"
            type="text"
            style={{borderRadius: "5px", transform: "trasnlateY(-15%)"}}
          />
        </div>
        <button id ="loginsubmit" block size="lg" type="submit" style = {{transform: "translate(200px, 12px)"}}>
          Login
        </button>
        <button id = "loginclose" onClick={cancel} style = {{transform: "translate(210px, 12px)"}}>Close</button>
      </form>
      </div>
    </div>
    </div>


    </div>
  );
}

export default Navbar;
