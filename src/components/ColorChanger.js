import React, { Component } from 'react';

export default class ColorChanger extends Component {
  componentWillMount() {
    console.log('MOUNTING')
  }

  render() {
    return (
      <div>
        <p> Font Color </p>
        <select onChange={ (e) => { this.props.update('fontColor', e.target.value) } }>
          <option value="black"> Black </option>
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
        </select>
      </div>
    )
  }
}