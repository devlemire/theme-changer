import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  render() {
    return (
      <div>
        <p> Font Color </p>
        <select>
          <option value="black"> Black </option>
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
        </select>
      </div>
    )
  }
}