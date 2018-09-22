import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/abamath.png';
import './navigation.css';

export default class Navigation extends React.Component {
  state = {
    toggle: 'topnav',
  }

  toggleNav = () => {
    if (this.state.toggle === 'topnav') {
      this.setState({ toggle: 'topnav responsive' });
    } else {
      this.setState({ toggle: 'topnav' });
    }
  }

  render() {
    return (
      <div className={this.state.toggle}>
        <div className="nav-left">
          <Link to="/"><img src={logo} alt="abamath" /></Link>
          <Link to="/"><span className="nav-company-name">abamath</span></Link>
        </div>
        <div
          className="nav-right"
          onClick={this.toggleNav}
          onKeyDown={this.toggleNav}
          role="button"
          tabIndex={0}
        >
          <Link to="/#contact">Contact</Link>
          <Link to="/#districtList">Where</Link>
          <Link to="/#about">About</Link>
          <Link to="/#codeChampionship">Code Championship</Link>
          <Link to="/#camps">Camps</Link>
          <Link to="/#upcoming">Upcoming</Link>
        </div>
        <button type="button" onClick={this.toggleNav} aria-label="navigation toggle" className="navigation-toggle">
          {/* Each of these spans represents a bar in the hamburger menu toggle button */}
          <span />
          <span />
          <span />
        </button>
      </div>
    );
  }
}
