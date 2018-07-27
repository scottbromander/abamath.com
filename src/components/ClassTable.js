import React from "../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import Link from "gatsby-link";

export default class ClassTable extends React.Component {

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>District</th>
            <th>Days</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Time</th>
            <th>Grades</th>
          </tr>
        </thead>
        <tbody>
          {this.props.districtClasses.filter(this.searchFilter).map(({ node }) =>
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
              <td>
                <Link to={node.fields.slug} >
                  {node.fields.days}
                </Link>
              </td>
              <td>
                <Link to={node.fields.slug} >
                  {node.fields.startdate}
                </Link>
              </td>
              <td>
                <Link to={node.fields.slug} >
                  {node.fields.enddate}
                </Link>
              </td>
              <td>
                <Link to={node.fields.slug} >
                  {node.fields.time}
                </Link>
              </td>
              <td>
                <Link to={node.fields.slug} >
                  {node.fields.grades}
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
  
}
