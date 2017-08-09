import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import characters from '../data/characters';
import Detail from './Detail';

export default class CharacterInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favDetail = characters.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/Characters">Back to Characters</Link>
        {favDetail}
      </div>
    );
  }
}
