import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import logo from "../images/abamath.png"
import "./navigation.css"
import Link from "gatsby-link";

export default class Navigation extends React.Component {

  render(){
    return(
      <div id="navigation">
        <ul>
      <li>
        <Link to={`/`}>
            <img src={logo} />
        </Link>
      </li>
      <li>
        <Link to={`/`}>
          <h1>abamath</h1>
        </Link>
      </li>
      {/* <li>
      <Link className={linkStyle} to={`/contact/`}>
        Contact 
      </Link> 
      </li>
      <li>
      <Link className={linkStyle} to={`/curriculum/`}>
        Camps 
      </Link>
      </li>
      <li>
      <Link className={linkStyle} to={`/about/`}>
        About 
      </Link>
      </li>
      <li>
      <Link className={linkStyle} to={`/`}>
        Home
      </Link> 
      </li> */}
      <li className="pages">
        <Link to={`/#contact`}>
          Contact
        </Link>
      </li>
      <li className="pages">
        <Link to={`/#about`}>
          About
        </Link>
      </li>
      <li className="pages">
        <Link to={`/#classes`}>
          Camps
        </Link>
      </li>
      </ul>
      </div>
    )
  }
}