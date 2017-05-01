import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger'
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor

  // updateColor

  // updateSize

  // updateFamily

  render() {
    return (
      <div>
        <div>
          { /* Render ColorChanger with an update prop that is the updateColor method */ }
          { /* Render SizeChanger with an update prop that is the updateSize method */ }
          { /* Render FamilyChanger with an update prop that is the updateFamily method */ }
        </div>
        { /* Render TextContainer with a fontColor, fontSize, and fontFamily prop being equal to fontColor, fontSize, and fontFamily on state */ }
      </div>
    )
  }
}

export default App;
