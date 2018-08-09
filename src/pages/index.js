import React from "react";
import Img from "gatsby-image";
import ClassTable from "../components/ClassTable";
import ClassDescriptions from "../components/class-descriptions";
import About from "../components/about";
import Contact from "../components/contact";
import GirlsImg from "../images/abamath-girls-coding.jpg"
import KidsImg from "../images/abamath-robotics-team.png"
import CollageImg from "../images/abamath-collage.png"
import "./index.css";

<meta>We work with Community Eduaction to teach coding, video game creation, and website design camps in the Greater Twin Cities area.</meta>

export default class Index extends React.Component {
    state = {
    searchText: '',
    placeholderList: ["Search Here", "Hopkins", "Search Here", "Coding", "Search Here", "Minnetonka", "Search Here", "Edina"],
    listIndex: 0,
    placeholder: '',
    letterIndex: 0,
    removePlaceholder: 0,
  }

  componentDidMount() {
    this.interval = setInterval(this.updatePlaceholder, 150)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  updatePlaceholder = () => {
    // If placeholder should be removed
    if (this.state.removePlaceholder == 1) {
        // Change the placeholder to delete last letter, change letter index to one less
        this.setState({placeholder: this.state.placeholder.substring(0, this.state.letterIndex) + '|', letterIndex: this.state.letterIndex-1})
      // If placeholder has been completely deleted (but the '|'), either...
      if (this.state.placeholder == '|') {
        // Once listIndex equals length of list, restart the list by changing index to 0 and restart the the states
        if (this.state.listIndex == this.state.placeholderList.length-1) {
          this.setState({placeholder: '', listIndex: 0, removePlaceholder: 0, letterIndex: 0})
        }
        // Else, continute to move through the placeholderList by adding 1 to the listIndex, and restart the states
        else {
          this.setState({placeholder: '', listIndex: this.state.listIndex+1, removePlaceholder: 0, letterIndex: 0,})
        }
      }
    }
    // If the placeholder needs to be typed out
    else {
      // Once length of placeholder is the same length as the current word in the list
      if (this.state.placeholder.length-1 == this.state.placeholderList[this.state.listIndex].length) {
        // timeout and wait a little longer to show fully typed word
        setTimeout(() => {
            this.setState({
            placeholder: this.state.placeholder,
            // change to start the removal of the word process (the first if statement)
            removePlaceholder: 1
          })
        }, 700)
      }
      // Else, the word need to be typed out completely
      else {
        this.setState({ 
          // Remove the '|' symbol, add the next letter, re-add the '|' symbol
          placeholder: this.state.placeholder.substring(0, this.state.letterIndex) + this.state.placeholderList[this.state.listIndex][this.state.letterIndex] + '|',
          // Add one to the letterIndex to keep moving through the word
          letterIndex: this.state.letterIndex+1,
        })
      }
    }
  }


  render() {
    return (
      <div>
        <div id="background"></div>
        <div id="body">
          <div id="classes">
          <h2>UPCOMING CLASSES</h2>
          <input type="text" placeholder={this.state.placeholder} onChange={this.updateSearchText} value={this.state.searchText} />
          <div id="table">
          <ClassTable
            districtClasses={this.props.data.allCommunityEducationDistrictClasses.edges}
            searchText={this.state.searchText}
          />
          </div>
          </div>
          <img src={GirlsImg} />
          <ClassDescriptions 
            allOfferedClasses = {this.props.data.allOfferedClasses.edges}
          />
          <About/>
          <img src={KidsImg} />
          <Contact />
          <img src={CollageImg} />
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allCommunityEducationDistrictClasses {
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
    },

    allOfferedClasses: allCommunityEducationOfferedClasses {
      totalCount
      edges {
        node {
          id
          fields {
            slug,
            classgrades,
            classdescription,
            className
          }
        }
      }
    }
}  
`