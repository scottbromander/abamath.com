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
    removePlaceholder: false,
    humanize: Math.round(Math.random() * (200 - 30)) + 30
  }

  componentDidMount() {
    this.updatePlaceholder()
  }

  componentDidUpdate() {
    this.updatePlaceholder()
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
    var restartList = this.state.listIndex == this.state.placeholderList.length-1
    var fullWord = this.state.placeholder.length-1 == this.state.placeholderList[this.state.listIndex].length
    var removeLetter = this.state.placeholder.substring(0, this.state.letterIndex) + '|'
    var addLetter = this.state.placeholder.substring(0, this.state.letterIndex) + this.state.placeholderList[this.state.listIndex][this.state.letterIndex] + '|'
    var wordDeleted = this.state.placeholder == "|"

    if (wordDeleted && restartList) {
      this.setState({listIndex: 0})
    }
    else if (wordDeleted) {
      this.setState({listIndex: this.state.listIndex+1})
    }

    if (wordDeleted) {
      this.setState({placeholder: '', removePlaceholder: false, letterIndex: 0, humanize: Math.round(Math.random() * (200 - 30)) + 30})
    }
    else if (this.state.removePlaceholder) {
      setTimeout(() => {
        this.setState({
        placeholder: removeLetter, 
        letterIndex: this.state.letterIndex-1})
        }, this.state.humanize)
    }
    else if (!this.state.removePlaceholder && fullWord) {
        setTimeout(() => {
            this.setState({
            placeholder: this.state.placeholder,
            removePlaceholder: true
          })
        }, 600)
      }
    else {
      setTimeout(() => {
        this.setState({ 
          placeholder: addLetter,
          letterIndex: this.state.letterIndex+1,
        })
      }, this.state.humanize)
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