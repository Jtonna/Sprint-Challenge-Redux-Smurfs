import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
import UpdateSmurf from "./UpdateSmurf";

import Header from './Header'

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="headerContainer">
          <Header />
        </div>
        <h1> Smurf village </h1>
        <Route path='/update/:id' component={UpdateSmurf} />
        <Route path='/add' component={AddSmurf} />
        <SmurfList />
      </div>
    )
  }
}
