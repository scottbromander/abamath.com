import React from "react";
import ClassTable from "../Class_Table/ClassTable";
import InputHints from "react-input-hints";

// // <meta>We work with Community Education to teach coding, video game creation, and website design camps in the Greater Twin Cities area.</meta>

export default class UpcomingClasses extends React.Component {
  state = {
    searchText: '',
    humanize: Math.round(Math.random() * (200 - 30)) + 30,
  }

  componentDidMount() {
    this.interval = setInterval(this.setHumanize, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setHumanize = () => {
    setTimeout(() => {
      this.setState({ humanize: Math.round(Math.random() * (200 - 30)) + 30 })
    }, this.state.humanize * 2 + 1200)
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
            writeSpeedMs={this.state.humanize}
            deleteSpeedMs={this.state.humanize}
            placeholders={["Search Here", "Hopkins", "Search Here", "Coding", "Search Here", "Minnetonka", "Search Here", "Edina"]}
          />
          <div id="table">
            <ClassTable
              districtClasses={this.props.allCommunityEducationDistrictClasses.edges}
              searchText={this.state.searchText}
            />
          </div>
        </section>
    )
  }
}