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

  // updateStatus

  render() {
    return (
      <div>
        <p> Editable </p>
        <select>
          <option value="true"> Allow Edit </option>
          <option value="false"> Disable Edit </option>
        </select>
        <div>
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        { /* Render TextContainer */ }
      </div>
    )
  }
}

export default App;
