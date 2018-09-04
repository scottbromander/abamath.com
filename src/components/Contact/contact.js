import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import "./contact.css"

export default class Contact extends React.Component {
  render(){
    return(
      <div id="contact">
        <h2>Connect With Us</h2>
        <p>Want to bring abamath to your school, find out what we're doing next, or just say hi?</p>
        <p><OutboundLink href="mailto:info@abamath.com">info@abamath.com</OutboundLink></p>
      </div>
    )
  }
}