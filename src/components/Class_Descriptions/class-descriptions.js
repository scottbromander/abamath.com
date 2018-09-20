import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './class-descriptions.css';

const classDescriptions = ({ allOfferedClasses }) => (
  <section className="homepage-section" id="camps">
    <h2>Camps</h2>
    <div id="classList">
      {allOfferedClasses.map(({ node }) => (
        <div className="offeredClass" key={node.id}>
          <h2>
            {node.fields.className}
          </h2>
          <h3>
            {node.fields.classgrades}
          </h3>
          <p>
            {node.fields.classshortdescription}
          </p>
          <Link to={node.fields.slug}><button type="button">Find A Camp!</button></Link>
        </div>
      ))}
    </div>
  </section>
);

classDescriptions.propTypes = {
  allOfferedClasses: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        className: PropTypes.string,
        classgrades: PropTypes.string,
      }),
    }),
  })),
};

classDescriptions.defaultProps = {
  allOfferedClasses: [],
};

export default classDescriptions;
