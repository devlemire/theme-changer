import React, { Component } from 'react';
import './App.css';

import ColorChanger from './components/ColorChanger'
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace'
    };
  }

  updateTheme(attr, val) {
    this.setState({ [attr]: val })
  }

  render() {
    return (
      <div>
        <div>
          <ColorChanger update={ this.updateTheme.bind(this) } />
          <SizeChanger update={ this.updateTheme.bind(this) } />
          <FamilyChanger update={ this.updateTheme.bind(this) } />
        </div>
        <TextContainer fontColor={ this.state.fontColor } fontSize={ this.state.fontSize } fontFamily={ this.state.fontFamily } />
      </div>
    )
  }
}

export default App;
