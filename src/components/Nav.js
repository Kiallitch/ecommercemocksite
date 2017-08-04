import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    let brandStyle = {
      fontFamily:"Faster One",
      fontSize:"1.5em",
      padding:0,
      color:"red"
    }

    return (
      <div>
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light" style={{backgroundColor:"#FFCC00"}}>
          <a className="navbar-brand" href="/"><span style={brandStyle}>Arise</span></a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/about">Characters</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Story</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/details">Dungeons</NavLink>
            </div>
          </div>
        </nav>
          {this.props.children}
        <footer className="navbar fixed-bottom navbar-light" style={{backgroundColor: "#FFCC00"}}>
            <div className="navbar-nav">
            </div>
        </footer>
      </div>
    );
  }
}

export default NavBar;
