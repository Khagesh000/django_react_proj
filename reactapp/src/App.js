import React, { Component } from 'react'
import './App.css';


import HomePage from './HomePage';




export default class App extends Component {
  state = {
    result: null,
  };


  render() {

    const { result } = this.state;

    return (
      <div>
        <HomePage result={result} />
        
        
        
      </div>
    )
  }
}


