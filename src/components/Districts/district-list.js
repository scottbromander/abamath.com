import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './district-list.css';

const districtList = ({ allDistricts }) => (
  <section className="homepage-section" id="districtList">
    <h2>Where We Are</h2>
    <div id="splitLine"><hr /></div>
    <div id="grid">
      {allDistricts.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link to={node.fields.slug}>
            {node.fields.districtName}
          </Link>
        </div>
      ))}
    </div>
    <div id="newLine" />
  </section>
);

districtList.propTypes = {
  allDistricts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        districtName: PropTypes.string,
        slug: PropTypes.string,
      }),
    }),
  })).isRequired,
};

export default districtList;
