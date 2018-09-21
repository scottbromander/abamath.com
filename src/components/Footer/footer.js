import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './footer.css';

const footer = ({ allOfferedClasses }) => (
  <div id="footer">
    <footer>
      <div className="grid-container">
        <div>
          <h4>Pages</h4>
          <Link to="/curriculum/">
            Camps
          </Link>
          <Link to="/#about">
            About
          </Link>
          <Link to="/#contact">
            Contact
          </Link>
        </div>
        <div>
          <h4>Camps</h4>
          {allOfferedClasses.map(({ node }) => (
            <Link to={node.fields.slug} key={node.fields.slug}>
              {node.fields.className}
            </Link>
          ))}
        </div>
        <div>
          <h4>Surveys</h4>
          <Link to="/survey/">
            Student Survey
          </Link>
          <Link to="/parent/">
            Parent Survey
          </Link>
          <Link to="/mailing/">
            Mailing Survey
          </Link>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <OutboundLink href="mailto:info@abamath.com">
            Email
          </OutboundLink>
          <OutboundLink href="https://www.facebook.com/Abamath/">
            Facebook
          </OutboundLink>
          <OutboundLink href="https://twitter.com/abamathCoding">
            Twitter
          </OutboundLink>
        </div>
      </div>
      <hr />
      <p id="copyright">&copy; 2018 abamath</p>
    </footer>
  </div>
);


footer.propTypes = {
  allOfferedClasses: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        className: PropTypes.string,
        slug: PropTypes.string,
      }),
    }),
  })).isRequired,
};

export default footer;
