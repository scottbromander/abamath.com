import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import ClassTable from '../../components/Class_Table/ClassTable';
import './district-class.css';
import Layout from '../../components/layout';

class DistrictClass extends React.Component {
  state = {
    searchText: this.props.data.specificClass.edges[0].node.fields.district,
  };

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const specificClass = this.props.data.specificClass.edges[0].node.fields;
    return (
      <Layout id="district-classes">
        <>
          <div id="classInfo">
            <h1>
              {specificClass.district}
              {' '}
              {specificClass.className}
            </h1>
            <h2>
              Time:
              {' '}
              {specificClass.time}
            </h2>
            <h2>
              Grades:
              {' '}
              {specificClass.grades}
            </h2>
            <h2>
              Days:
              {' '}
              {specificClass.days}
            </h2>
            <h2>
              Dates:
              {' '}
              {specificClass.startdate}
              {' '}
              -
              {' '}
              {specificClass.enddate}
            </h2>
            <p>
              {specificClass.description}
            </p>

            <OutboundLink href={specificClass.link}>
              <button type="button">Sign up!</button>
            </OutboundLink>
          </div>
          <h2>
            Other Camps in
            {' '}
            {specificClass.district}
            {''}
          </h2>
          <ClassTable
            districtClasses={this.props.data.allDistrictClasses.edges}
            searchText={this.state.searchText}
          />
          <h2>
            Other
            {' '}
            {specificClass.className}
            {' '}
            Camps
          </h2>
          <ClassTable
            districtClasses={this.props.data.allDistrictClasses.edges}
            searchText={specificClass.className}
          />
        </>
      </Layout>
    );
  }
}

export const query = graphql`
query DistrictClassQuery($slug: String!) {
  specificClass: allCommunityEducationDistrictClasses(filter: {fields: { slug: { eq: $slug } }}) {
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

DistrictClass.propTypes = {
  data: PropTypes.shape({
    specificClass: EdgeArrayOfObjectsPropType,
    allDistrictClasses: EdgeArrayOfObjectsPropType,
  }).isRequired,
};

export default DistrictClass;
