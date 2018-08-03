import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';

<meta></meta>

export default class CodingForKids extends React.Component {
  render(){
    return(
      <div>
        <h1>
          Coding For Kids 
        </h1>
        <ClassroomProcedures />
      </div>
    )
  }
}