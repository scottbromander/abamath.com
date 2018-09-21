import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ClassTable from '../../components/Class_Table/ClassTable';
import './district.css';
import Layout from '../../components/layout';

const District = ({ data }) => {
  const specificDistrict = data.allCommunityEducationDistrict.edges[0].node.fields;
  return (
    <Layout>
      <div id="info">
        <h1>
          {specificDistrict.districtName}
          {''}
        </h1>
      </div>
      <div id="offered-classes">
        <h2>
          Upcoming
          {' '}
          {specificDistrict.districtName}
          {''}
          {' '}
          Camps
        </h2>
        <ClassTable
          districtClasses={data.allDistrictClasses.edges}
          searchText={specificDistrict.districtName}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
query DistrictsQuery($slug: String!) {
  allCommunityEducationDistrict(filter: {fields: { slug: { eq: $slug } }}) {
    totalCount
    edges {
      node {
        id
        fields {
          slug,
          districtName
        }
      }
    }
  },

  tableClass: allCommunityEducationDistrictClasses(filter: {fields: { slug: { eq: $slug } }}) {
    totalCount
    edges {
      node {
        id
        fields {
          className
          days
          grades
          startdate
          enddate
          district
          link
          time
          description
          link
          slug
        }
      }
    }
  },

  allDistrictClasses: allCommunityEducationDistrictClasses {
    totalCount
    edges {
      node {
        id
        fields {
          className
          days
          grades
          startdate
          enddate
          district
          link
          time
          description
          slug
        }
      }
    }
  }
}
`;


const EdgeArrayOfObjectsPropType = PropTypes.shape({
  edges: PropTypes.arrayOf(PropTypes.shape({})),
}).isRequired;

District.propTypes = {
  data: PropTypes.shape({
    allCommunityEducationDistrict: EdgeArrayOfObjectsPropType,
  }).isRequired,
};

export default District;
