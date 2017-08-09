import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import weapons from "../data/weapons.js";

class Weapons extends Component {
  render() {

    let match = this.props.match;

    let navParts = weapons.map((part) => {
      return(
        <div key={part.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={part.image} alt={part.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{part.name}</h4>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
            {navParts}
        </div>
      </div>
    );
  }
}

export default Weapons;
