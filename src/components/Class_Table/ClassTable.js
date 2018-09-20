import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class ClassTable extends React.Component {
  state = {
    numberOfClassesToShow: 10,
  }

  updateClasses = () => {
    this.setState(previousState => ({
      numberOfClassesToShow: previousState.numberOfClassesToShow + 10,
    }));
  }

  searchFilter = (districtClass) => {
    const fieldsToCheck = [
      'className',
      'days',
      'district',
      'time',
      'startdate',
      'enddate',
      'grades',
    ];

    const doAnyFieldsMatch = fieldsToCheck.reduce((alreadyFound, field) => {
      if (districtClass.node && districtClass.node.fields && districtClass.node.fields[field]) {
        const currentFieldToCheck = districtClass.node.fields[field].toLowerCase();
        const currentSearchText = this.props.searchText.toLowerCase();
        return alreadyFound || currentFieldToCheck.includes(currentSearchText);
      }
      return false;
    }, false);

    return doAnyFieldsMatch;
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>District</th>
              <th className="mobile-hide">Days</th>
              <th>Start Date</th>
              <th className="mobile-hide">End Date</th>
              <th className="mobile-hide">Time</th>
              <th className="mobile-hide">Grades</th>
            </tr>
          </thead>
          <tbody>
            {this.props.districtClasses.filter(this.searchFilter)
              .splice(0, this.state.numberOfClassesToShow).map(({ node }) => (
                <tr key={node.id}>
                  <td>
                    <Link to={node.fields.slug}>
                      {node.fields.className}
                    </Link>
                  </td>
                  <td>
                    <Link to={node.fields.slug}>
                      {node.fields.district}
                    </Link>
                  </td>
                  <td className="mobile-hide">
                    <Link to={node.fields.slug}>
                      {node.fields.days}
                    </Link>
                  </td>
                  <td>
                    <Link to={node.fields.slug}>
                      {node.fields.startdate}
                    </Link>
                  </td>
                  <td className="mobile-hide">
                    <Link to={node.fields.slug}>
                      {node.fields.enddate}
                    </Link>
                  </td>
                  <td className="mobile-hide">
                    <Link to={node.fields.slug}>
                      {node.fields.time}
                    </Link>
                  </td>
                  <td className="mobile-hide">
                    <Link to={node.fields.slug}>
                      {node.fields.grades}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {this.state.numberOfClassesToShow
          < this.props.districtClasses.filter(this.searchFilter).length
          && (
          <p id="expand">
            <button
              onClick={this.updateClasses}
              type="button"
            >
              Click Here To Show More
            </button>
          </p>
          )
        }
      </div>
    );
  }
}

ClassTable.propTypes = {
  districtClasses: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  searchText: PropTypes.string,
};

ClassTable.defaultProps = {
  districtClasses: [],
  searchText: '',
};

export default ClassTable;
