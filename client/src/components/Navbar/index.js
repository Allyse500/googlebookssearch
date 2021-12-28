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
  
    document.getElementById('closeRsp').style.display = "block";
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

function closeRsp(){
  document.getElementById("searchResultGrid").style.display="none";
}

//==========================NAVBAR===================================================//
function dropDownNav() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//==========================ABOUT PROMPT BOX====================================//
//display about prompt box-------------------------------------------------------------
function aboutPromptBox(){
  document.getElementById("aboutModal").style.display ="block";
  document.getElementById("searchResultGrid").style.display="none";
  }//end of aboutPromptBox()
  
  //close about prompt box-------------------------------------------------------------
  function closeabout(){
  document.getElementById("aboutModal").style.display ="none";
  }//end of closeabout()

//==========================SIGN UP PROMPT BOX===================================//
//display signup prompt box-------------------------------------------------------------
function signupPromptBox(){
  document.getElementById("signupModal").style.display ="block";
  document.getElementById("searchResultGrid").style.display="none";
  }//end of signupPromptBox()
  
  //close signup prompt box-------------------------------------------------------------
  function closesignup(){
  document.getElementById("signupModal").style.display ="none";
  }//end of closesignup()
  

//===========================LOGIN PROMPT BOX====================================//
//display login prompt box-------------------------------------------------------------
function loginPromptBox(){
  document.getElementById("loginModal").style.display ="block";
  document.getElementById("searchResultGrid").style.display="none";
  }//end of loginPromptBox()
  
  //close login prompt box-------------------------------------------------------------
  function closelogin(){
  document.getElementById("loginModal").style.display ="none";
  }//end of closelogin()



  return (
    <div>
      <div id="navbar">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div> */}
            {/* <ul className="navbar-nav"> */}

              <Link className="navbar-brand" to="/" id= "title" style = {{color: "white", fontSize: "180%", textDecoration: "none"}}>
                G<span className="abrev">oogle</span> B<span className="abrev">ooks</span> S<span className="abrev">earch</span>
              </Link>
              {/* <Link
                to="/saved" id = "saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
              >
                Saved
              </Link> */}

              <form id = "form">
                <input id="term" name="term" list="term" type="text" placeholder="Type in a search term to begin"/>
                <div id = "searchbtn" onClick = {search}>Search</div>
                <div className="dropdown">
                <div onClick={dropDownNav} className="dropbtn">&equiv;</div>
                <div id="myDropdown" className="dropdown-content">
                    <div id="aboutBtnDD" className="navOpt" onClick ={aboutPromptBox}>About</div>
                    <div id="signUpBtnDD" className="navOpt" onClick={signupPromptBox}>Sign Up</div>
                    <div id="loginBtnDD" className="navOpt" onClick = {loginPromptBox}>Log In</div>
                </div>
            </div>
              </form>
                
              <div id="headerBtnGrid">
                <button id = "about" onClick ={aboutPromptBox}>About</button>
                <button id = "signup" onClick={signupPromptBox}>Sign Up</button>
                <button id = "login" onClick = {loginPromptBox}>Login</button>
              </div>
            {/* </ul>         */}
          {/* </div>      
        </nav> */}
      </div>
      
      <div id="searchResultGrid">
        <div id ="content">
        </div><div id='closeRsp' onClick={closeRsp}>Close</div>
      </div>
      {/* <br></br>
      <button id = "save" onClick = {save}>Save</button>
      <div id = "savedmsg">Saved!</div> */}
{/* ABOUT DIALOG BOX============================================================= */}
    <div id="aboutModal">
        <div id="aboutContainer">
            <div id="aboutSecondaryContainer">
                <div id="aboutTitle">About</div>
                <div id="aboutContents">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"orange", fontWeight: "bold"}}>Welcome to Google Books Search!</span> Here, you may find any title of books hosted from Google Books. With an account, you may prepare a collection of books searched. This service is free to the public.<br/><br/> Enjoy!<br/><br/><span style={{fontStyle:"italic"}}>-Admin</span>
                </div>
                <div id="aboutCloseButton" onClick={closeabout}>Close</div>
            </div>
        </div>
    </div>

{/* SIGN UP DIALOG BOX=========================================================== */}
    <div id="signupModal">
        <div id="signupFormContainer">
            <div id="signupFormSecondaryContainer">
                <div id="signupFormTitle">Sign Up</div>
                <form id="signupForm">
                    <div id="signupInputContents">
                        <label for="newUsername" className="signupFormLabel">Username: </label>
                        <input className="formInput" type="text" id="newUsername" name="newUsername"/><br></br>
                        <div id="signupPasswordBlock">
                            <label for="newPassword" className="signupFormLabel">Password: </label>
                            <input className="formInput" type="password" id="newPassword" name="newPassword"/>
                        </div>
                    </div>
                    <br></br>
                    <div id="signupBtnsGrid">
                        <button id="signupSubmitBtn">Submit</button><div id="signupCloseButton" onClick={closesignup}>Close</div>
                    </div>
                </form>
            </div>
        </div>
    </div>

{/* LOGIN DIALOG BOX============================================================= */}
<div id="loginModal">
        <div id="loginFormContainer">
            <div id="loginFormSecondaryContainer">
                <div id="loginFormTitle">Login</div>
                <form id="loginForm">
                    <div id="loginInputContents">
                        <label for="username" className="loginFormLabel">Username: </label>
                        <input className="formInput" type="text" id="username" name="username"/><br></br>
                        <div id="loginPasswordBlock">
                            <label for="password" className="loginFormLabel">Password: </label>
                            <input className="formInput" type="password" id="password" name="password"/>
                        </div>
                    </div>
                    <br></br>
                    <div id="loginBtnsGrid">
                        <button id="loginSubmitBtn">Submit</button><div id="loginCloseButton" onClick={closelogin}>Close</div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    </div>
  );
}

export default Navbar;
