import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FB from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Link from "gatsby-link"

export default class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <footer>
                    <p>Contact information: <OutboundLink href="mailto:info@abamath.com">
                        info@abamath.com</OutboundLink>.</p>
                    <Link to={`/curriculum/`}>
                        Camps
                    </Link>
                    <Link to={`#about`}>
                        About
                    </Link>
                    <Link to={`#contact`}>
                        Contact
                    </Link>
                    <p>Social media:</p>
                    <OutboundLink href="https://www.facebook.com/Abamath/">
                        <img src={FB} />
                    </OutboundLink>
                    <OutboundLink href="https://twitter.com/abamathtutoring">
                        <img src={Twitter} />
                    </OutboundLink>
                </footer>
            </div>
        )
    }
}