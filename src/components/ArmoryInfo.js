import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import armory from '../data/armory';
import Detail from './Detail';

export default class ArmoryInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favDetail = armory.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/Armory">Back to Armory</Link>
        {favDetail}
      </div>
    );
  }
}
