import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import WeaponInfo from './WeaponInfo';
import Weapons from './Weapons';
import CharacterInfo from './CharacterInfo';
import Characters from './Characters'
import ArmoryInfo from './ArmoryInfo'
import Armory from './Armory';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/WeaponInfo/:partnum" component={WeaponInfo}/>
            <Route path="/Weapons" component={Weapons}/>
            <Route path="/CharacterInfo/:partnum" component={CharacterInfo}/>
            <Route path="/Characters" component={Characters}/>
            <Route path="/ArmoryInfo/:partnum" component={ArmoryInfo}/>
            <Route path="/Armory" component={Armory}/>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
