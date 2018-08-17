import React from "react";
import logo from "../images/abamath.png"
import "./navigation.css"
import Link from "gatsby-link";

export default class Navigation extends React.Component {
  
  render(){
    function showNav() {
      var x = document.getElementById("myTopnav")
      if (x && x.className === "topnav") {
        x.className += " responsive";
      } 
      else if (x) {
        x.className = "topnav";
      }
    }
    return(
      <div className="topnav" id="myTopnav">
        <Link to={'/'} className="nav-left"><img src={logo} /></Link>
        <Link to={'/'} className="nav-left"><h1>abamath</h1></Link>
        <Link to={'/#contact'} className="nav-right">Contact</Link>
        <Link to={'/#about'} className="nav-right">About</Link>
        <Link to={'/#classes'} className="nav-right">Camps</Link>
        <Link to={showNav()} className="icon"><span></span><span></span><span></span></Link>

    </div>
    )
  }
}