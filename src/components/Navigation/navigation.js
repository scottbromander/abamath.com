import React from "react";
import logo from "../../images/abamath.png"
import "./navigation.css"
import Link from "gatsby-link";

export default class Navigation extends React.Component {
  state = {
    toggle: "topnav"
  }

  toggleNav = () => {
    if (this.state.toggle == "topnav") {
      this.setState({toggle: "topnav responsive"})
    }
    else {
      this.setState({toggle: "topnav"})
    }
  }
  
  render(){
    return(
      <div className={this.state.toggle}>
        <div className="nav-left">
        <Link to={'/'}><img src={logo} alt="abamath"/></Link>
        <Link to={'/'}><h1>abamath</h1></Link>
        </div>
        <div className="nav-right" onClick={this.toggleNav}>
        <Link to={'/#contact'}>Contact</Link>
        <Link to={'/#districtList'}>Where</Link>
        <Link to={'/#about'}>About</Link>
        <Link to={'/#codeChampionship'}>Code Championship</Link>
        <Link to={'/#camps'}>Camps</Link>
        <Link to={'/#upcoming'}>Upcoming</Link>
        </div>
        <button onClick={this.toggleNav} className="icon"><span></span><span></span><span></span></button>
    </div>
    )
  }
}