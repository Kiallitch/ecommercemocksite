import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: 65, textAlign:"center"}}>
        <h1><span style={{fontFamily: "Faster One", color:"red", fontSize:"4em"}}>Arise</span></h1>
        <h1>A story of swords, magic, and so much more.</h1>
        <br/>
        <h3>The Journey Home</h3>
        <br/>
        <img src={require('../images/title-img.jpg')} alt="" style={{width:"37%", borderRadius:"100%"}}/>
      </div>
    );
  }
}
export default Home;
