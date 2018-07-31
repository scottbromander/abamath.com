import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FB from "../images/facebook.png"
import Twitter from "../images/twitter.png"

export default class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <footer>
                    <p>Contact information: <OutboundLink href="mailto:info@abamath.com">
                        info@abamath.com</OutboundLink>.</p>
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