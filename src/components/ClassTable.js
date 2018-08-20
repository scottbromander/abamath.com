import React from "react";
import Link from "gatsby-link";

export default class ClassTable extends React.Component {
  state = {
    numberOfClassesToShow: 10,
  }

  updateClasses = (event) => {
    this.setState({
      numberOfClassesToShow: this.state.numberOfClassesToShow + 10
    })
  }

  searchFilter = districtClass => {
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
        return alreadyFound || districtClass.node.fields[field].toLowerCase().includes(this.props.searchText.toLowerCase());
      } else {
        return false;
      }
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
            {this.props.districtClasses.filter(this.searchFilter).splice(0, this.state.numberOfClassesToShow).map(({ node }) =>
              <tr key={node.id}>
                <td>
                  <Link to={node.fields.slug} >
                    {node.fields.className}
                  </Link>
                </td>
                <td>
                  <Link to={node.fields.slug} >
                    {node.fields.district}
                  </Link>
                </td>
                <td className="mobile-hide">
                  <Link to={node.fields.slug} >
                    {node.fields.days}
                  </Link>
                </td>
                <td>
                  <Link to={node.fields.slug} >
                    {node.fields.startdate}
                  </Link>
                </td>
                <td className="mobile-hide">
                  <Link to={node.fields.slug} >
                    {node.fields.enddate}
                  </Link>
                </td>
                <td className="mobile-hide">
                  <Link to={node.fields.slug} >
                    {node.fields.time}
                  </Link>
                </td>
                <td className="mobile-hide">
                  <Link to={node.fields.slug} >
                    {node.fields.grades}
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {this.state.numberOfClassesToShow < this.props.districtClasses.filter(this.searchFilter).length &&
          <p id="expand"><a onClick={this.updateClasses}>Click Here To Show More</a></p>
        }
      </div>
    )
  }

}
