import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FB from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Email from "../images/email.png";
import Link from "gatsby-link";
import "./footer.css";

export default class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <footer>
                    <div className="grid-container">
                    <div id="pages">
                    <h4>Pages</h4>
                    <Link to={`/curriculum/`}>
                        Camps
                    </Link>
                    <Link to={`/#about`}>
                        About
                    </Link>
                    <Link to={`/#contact`}>
                        Contact
                    </Link>
                    </div>
                    <div id="camps">
                    <h4>Camps</h4>
                    {this.props.allOfferedClasses.map(({ node }) =>
                        <Link to = {node.fields.slug}>{node.fields.className}</Link>
                        )}
                    </div>
                    <div id="surveys">
                    <h4>Surveys</h4>
                    <Link to={`/survey/`}>
                        Student Survey
                    </Link>
                    <Link to={`/parent/`}>
                        Parent Survey
                    </Link>
                    <Link to={`/mailing/`}>
                        Mailing Survey
                    </Link>
                    </div>
                    <div id="connect">
                    <h4>Connect With Us</h4>
                    <p>
                    <OutboundLink href="mailto:info@abamath.com">
                        <img src={Email} />
                    </OutboundLink>
                    <OutboundLink href="https://www.facebook.com/Abamath/">
                        <img src={FB} />
                    </OutboundLink>
                    <OutboundLink href="https://twitter.com/abamathCoding">
                        <img src={Twitter} />
                    </OutboundLink>
                    </p>
                    </div>
                    </div>
                    <hr></hr>
                    <p id="copyright">&copy; 2013 abamath</p>
                </footer>
            </div>
        )
    }
}