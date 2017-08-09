import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import weapons from '../data/weapons';
import Detail from './Detail';

export default class WeaponInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favParts = weapons.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/Weapons">Back to Weapons</Link>
        {favParts}
      </div>
    );
  }
}
