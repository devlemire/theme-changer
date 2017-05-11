<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create an application that can change the theme of a paragraph real-time using elements on the front-end. We will also create a switch that can enable and disable the ability to change the theme of the paragraph. In the process of creating this project, we will cover how to use `this`, `bind`, `state`, `props`, and `componentWillReceiveProps`.

You can find a finished live example <a href="#">here</a>.

<img src="" />

## Setup

* `fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm install` in your terminal.
* Run `npm start` after `npm install` has finished.

## Step 1

### Summary

In this step, we will create the initial state for `src/App.js`. On this state object, we will keep track of the initial theme values and if the theme is allowed to be edited.

### Instructions

* Open `src/App.js`.
* Create a `constructor` method where it says `// constructor`:
  * This method should call `super()`.
  * This method should create an initial state object with the following properties:
    * fontColor: 'black'
    * fontSize: 12,
    * fontFamily: 'monospace'
    * allowEdit: 'true'

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
  }

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
```

</details>

## Step 2

### Summary

In this step, we will create class methods in `src/App.js` to update `fontColor`, `fontSize`, `fontFamily`, and `allowEdit` on state. 

### Instructions

* Open `src/App.js`.
* Create an updateColor method that takes a parameter called `val` where it says `// updateColor`:
  * Use `setState` to update `fontColor` to `val`.
* Create an updateSize method that takes a parameter called `val` where it says `// updateSize`:
  * Use `setState` to update `fontSize` to `val`.
* Create an updateFamily method that takes a parameter called `val` where it says `// updateFamily`:
  * Use `setState` to update `fontFamily` to `val`.
* Create an updateStatus method that takes a parameter called `val` where it says `// updateStatus`:
  * Use `setState` to update `allowEdit` to `val`.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateStatus(val) {
    this.setState({ allowEdit: val })
  }

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
```

</details>

## Step 3

### Summary

In this step, we will bind `this` to our methods in the `constructor` method in `App.js`. We'll only need to bind `this` on the `updateColor`, `updateSize`, and `updateFamily` methods.

### Instructions

* Open `src/App.js`.
* Bind `this` to the `updateColor`, `updateSize`, and `updateFamily` methods at the bottom of the `constructor` method.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateStatus(val) {
    this.setState({ allowEdit: val })
  }

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
```

</details>

## Step 4

### Summary

In this step, we will `render` our `ColorChanger`, `FamilyChanger`, and `SizeChanger` components in `App.js` with an `update` prop.

### Instructions

* Open `src/App.js`.
* Render the `ColorChanger` component where it says `{ /* Render ColorChange */ }`:
  * Add a prop called `update` that is equal to the `updateColor` method.
  * Add a prop called `allowEdit` that is eqaul to the value of `allowEdit` on state.
* Render the `SizeChanger` component where it says `{ /* Render SizeChanger */ }`:
  * Add a prop called `update` that is equal to the `updateSize` method.
  * Add a prop called `allowEdit` that is eqaul to the value of `allowEdit` on state.
* Render the `FamilyChanger` component where it says `{ /* Render FamilyChanger */ }`:
  * Add a prop called `update` that is equal to the `updateFamily` method.
  * Add a prop called `allowEdit` that is eqaul to the value of `allowEdit` on state.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateStatus(val) {
    this.setState({ allowEdit: val })
  }

  render() {
    return (
      <div>
        <p> Editable </p>
        <select>
          <option value="true"> Allow Edit </option>
          <option value="false"> Disable Edit </option>
        </select>
        <div>
          <ColorChanger update={ this.updateColor } allowEdit={ this.state.allowEdit } />
          <SizeChanger update={ this.updateSize } allowEdit={ this.state.allowEdit } />
          <FamilyChanger update={ this.updateFamily } allowEdit={ this.state.allowEdit } />
        </div>
        { /* Render TextContainer */ }
      </div>
    )
  }
}

export default App;
```

</details>

## Step 5

### Summary

In this step, we will update our `select` elements in the `ColorChanger`, `FamilyChanger`, and `SizeChanger` components to use an `onChange` that calls the `update` prop with the value of the `select` element. We will also disable the `select` element if the value of `allowEdit` is `"false"`.

### Instructions

* Open `ColorChanger.js`, `FamilyChanger.js`, and `SizeChanger.js` from `src/components/`.
* Locate the `select` tag, in all three files, and add an `onChange` prop:
  * The `onChange` should use an arrow function to capture the `event`. 
  * Inside the arrow function call the `update` prop with the value of the target from the `event`.
  * Parse Int the value of the target when in `SizeChanger`. 
* Locate the `select` tag, in all three files, and add a `disabled` prop:
  * The `select` element should be `disabled` if `allowEdit` on state is equal to `"false"`.

### Solution

<details>

<summary> <code> src/components/ColorChanger.js </code> </summary>

```jsx
render() {
  return (
    <div>
      <p> Font Color </p>
      <select onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/components/FamilyChanger.js </code> </summary>

```jsx
render() {
  return (
    <div>
      <p> Font Family </p>
      <select onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/components/SizeChanger.js </code> </summary>

```jsx
render() {
  return (
    <div>
      <p> Font Size </p>
      <select onChange={ (e) => this.props.update(parseInt(e.target.value, 10)) } disabled={ this.state.allowEdit === "false" }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    </div>
  )
}
```

</details>

## Step 6

### Summary 

In this step, we will update the `select` element in `src/App.js` to use an `onChange` prop to update the value of `allowEdit` on state.

### Instructions

* Open `src/App.js`.
* Locate the `select` element:
  * Add an `onChange` prop:
    * The `onChange` should use an arrow function to capture the `event`.
    * Inside the arrow function call the `updateStatus` method with the value of the target from the `event`.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateStatus(val) {
    this.setState({ allowEdit: val })
  }

  render() {
    return (
      <div>
        <p> Editable </p>
        <select onChange={ (e) => this.updateStatus(e.target.value) }>
          <option value="true"> Allow Edit </option>
          <option value="false"> Disable Edit </option>
        </select>
        <div>
          <ColorChanger update={ this.updateColor } />
          <SizeChanger update={ this.updateSize } />
          <FamilyChanger update={ this.updateFamily } />
        </div>
        { /* Render TextContainer */ }
      </div>
    )
  }
}

export default App;
```

</details>

## Step 7

### Summary

In this step, we will `render` the `TextContainer` component in `App.js` with a `fontColor`, `fontSize`, and `fontFamily` prop equal to `fontColor`, `fontSize` and `fontFamily`'s value on `App.js`'s state.

### Instructions

* Open `src/App.js`.
* Render the `TextContainer` component where it says `{ /* Render TextContainer */ }`:
  * Add a `fontColor` prop that equals `fontColor` on state.
  * Add a `fontSize` prop that equals `fontSize` on state.
  * Add a `fontFamily` prop that equals `fontFamily` on state.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

// Components
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  updateStatus(val) {
    this.setState({ allowEdit: val })
  }

  render() {
    return (
      <div>
        <p> Editable </p>
        <select onChange={ (e) => this.updateStatus(e.target.value) }>
          <option value="true"> Allow Edit </option>
          <option value="false"> Disable Edit </option>
        </select>
        <div>
          <ColorChanger update={ this.updateColor } />
          <SizeChanger update={ this.updateSize } />
          <FamilyChanger update={ this.updateFamily } />
        </div>
        <TextContainer fontColor={ this.state.fontColor } fontSize={ this.state.fontSize } fontFamily={ this.state.fontFamily } />
      </div>
    )
  }
}

export default App;
```

</details>

## Step 8

### Summary

At first glance it seems everything is working fine in our application, however when we change the value of `allowEdit` our child components are not updating with the new value. In this step, we will fix this bug using a react life cycle method called `componentWillReceiveProps`.

### Instructions

* Open `ColorChanger.js`, `FamilyChanger.js`, and `SizeChanger.js` from `src/components/`.
* Add a `componentWillReceiveProps` method underneath the `constructor` method in all three files:
  * This method should take in a parameter called `props`.
  * This method should use `setState` to update the value of `allowEdit` on state to the value of `allowEdit` on `props`.

### Solution

<details>

<summary> <code> src/components/ColorChanger.js </code> </summary>

```jsx
import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state={
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ allowEdit: props.allowEdit });
  }

  render() {
    return (
      <div>
        <p> Font Color </p>
        <select onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
          <option value="black"> Black </option>
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
        </select>
      </div>
    )
  }
}
```

</details>

<details>

<summary> <code> src/components/FamilyChanger.js </code> </summary>

```jsx
import React, { Component } from 'react';

export default class FamilyChanger extends Component {
 constructor(props) {
    super(props);
    this.state={
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ allowEdit: props.allowEdit });
  }

  render() {
    return (
      <div>
        <p> Font Family </p>
        <select onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
          <option value="monospace"> Monospace </option>
          <option value="arial"> Arial </option>
          <option value="courier"> Courier </option>
        </select>
      </div>
    )
  }
}
```

</details>

<details>

<summary> <code> src/components/SizeChanger.js </code> </summary>

```jsx
import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state={
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ allowEdit: props.allowEdit });
  }

  render() {
    return (
      <div>
        <p> Font Size </p>
        <select onChange={ (e) => this.props.update(parseInt(e.target.value, 10)) } disabled={ this.state.allowEdit === "false" }>
          <option value="12"> 12 </option>
          <option value="13"> 13 </option>
          <option value="14"> 14 </option>
        </select>
      </div>
    )
  }
}
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>