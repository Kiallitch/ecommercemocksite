import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    let brandStyle = {
      fontFamily:"Faster One",
      fontSize:"1.5em",
      padding:0,
      color:"#FFF"
    }

    return (
      <div>
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light" style={{backgroundColor:"#000"}}>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/">Arise</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/Characters">Characters</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/Armory">Armory</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/Weapons">Weapons</NavLink>
            </div>

          </div>
        </nav>
          {this.props.children}
        <footer className="navbar fixed-bottom navbar-light" style={{backgroundColor: "#000"}}>
            <div className="navbar-nav">
              <p className="navbar-text" style={{margin:"auto"}}>© 2017 Arise All rights reserved.</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default NavBar;
