import React from 'react';
import InputHints from 'react-input-hints';
import PropTypes from 'prop-types';
import ClassTable from '../Class_Table/ClassTable';

// eslint-disable-next-line max-len
// <meta>We work with Community Education to teach coding, video game creation, and website design camps in the Greater Twin Cities area.</meta>

class UpcomingClasses extends React.Component {
  state = {
    searchText: '',
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <section className="homepage-section" id="upcoming">
        <h2>Upcoming Camps</h2>
        <InputHints
          aria-label="search"
          onChange={this.updateSearchText}
          value={this.state.searchText}
          waitBeforeDeleteMs={1200}
          writeSpeedMs={[40, 200]}
          deleteSpeedMs={[20, 100]}
          placeholders={['Search Here', 'Hopkins', 'Search Here', 'Coding', 'Search Here', 'Minnetonka', 'Search Here', 'Edina']}
        />
        <div id="table">
          <ClassTable
            districtClasses={this.props.allCommunityEducationDistrictClasses}
            searchText={this.state.searchText}
          />
        </div>
      </section>
    );
  }
}

UpcomingClasses.propTypes = {
  allCommunityEducationDistrictClasses: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        className: PropTypes.string,
        district: PropTypes.string,
        days: PropTypes.string,
        startdate: PropTypes.string,
        enddate: PropTypes.string,
        time: PropTypes.string,
        slug: PropTypes.string,
      }),
    }),
  })).isRequired,
};

export default UpcomingClasses;
