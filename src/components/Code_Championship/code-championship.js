import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import "./code-championship.css";

<meta>Section describing Code Championship and linking to full page.</meta>

export default class CodeChampionship extends React.Component {
    render() {
        return (
            <div id="codeChampionship">
                <h2>Code Championship</h2>
                <p>
                    Attention girls and boys, the March Madness of coding has arrived; all the excitement of a
                    tournament packed into one day!Spend the day building out an artificial intelligence computer
                    bot to play head-to-head against your peers! No previous experience necessary! Want some more prep?
                    Stay tuned for Abamath's 2019 Code Championship Boot Camps and Sprints to gear up for State!
                </p>
                <OutboundLink href="https://www.codechampionship.com/" target="_blank"><button type="button">Learn More</button></OutboundLink>
            </div>
        )
    }
}