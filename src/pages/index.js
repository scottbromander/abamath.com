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
    place: 0,
    placeholder: '',
    char: 0,
    rm: 0,
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
    if (this.state.rm == 1) {
        this.setState({placeholder: this.state.placeholder.substring(0, this.state.char) + '|', char: this.state.char-1})
      if (this.state.placeholder == '|') {
        if (this.state.place == this.state.placeholderList.length-1) {
          this.setState({placeholder: '', place: 0, rm: 0, char: 0})
        }
        else {
          this.setState({placeholder: '', place: this.state.place+1, rm: 0, char: 0,})
        }
      }
    }
    else {
      if (this.state.placeholder.length-1 == this.state.placeholderList[this.state.place].length) {
        setTimeout(() => {
            this.setState({
            placeholder: this.state.placeholder,
            rm: 1
          })
        }, 700)
      }
      else {
        this.setState({ 
          placeholder: this.state.placeholder.substring(0, this.state.char) + this.state.placeholderList[this.state.place][this.state.char] + '|',
          char: this.state.char+1,
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