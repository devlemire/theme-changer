<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create an application that can change the theme of a paragraph real-time using elements on the front-end. In the process we will cover how to use `this`, `bind`, `state`, `props`, and `componentWillReceiveProps`.

## Step 1

### Summary

In this step we will create the initial state for `App.js` and `TextContainer.js`.

### Instructions

* Open `App.js` ( `src/App.js` ) and `TextContainer.js` ( `src/components/TextContainer.js` )
* In `App.js`, create a constructor method where it says `// constructor`
  * Call `super()`
  * Create a `state` object with the following properties:
    * fontColor: 'black'
    * fontSize: 12,
    * fontFamily: 'monospace'
* In `TextContainer.js`, create a constructor method where it says `// constructor`
  * Call `super()`
  * Create a `state` object with the following properties:
    * fontColor: 'black',
    * fontSize: 12,
    * fontFamily: 'monospace'

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace'
    };
  }
```

</details>

<details> 

<summary> <code> TextContainer.js </code> </summary>

```jsx
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace'
    };
  }
```

</details>

## Step 2

### Summary

In this step we will create methods on `App.js` to update `fontColor`, `fontSize` and `fontFamily` on state. 

### Instructions

* Open `App.js` ( `src/App.js` )
* Create an updateColor method that takes a parameter called `val` where it says `// updateColor`
  * Use `setState` to update `fontColor` to `val`
* Create an updateSize method that takes a parameter called `val` where it says `// updateSize`
  * Use `setState` to update `fontSize` to `val`
* Create an updateFamily method that takes a parameter called `val` where it says `// updateFamily`
  * Use `setState` to update `fontFamily` to `val`

### Solution

<details>

<summary> <code> App.js </code> </summary>

```jsx
updateColor(val) {
  this.setState({ fontColor: val });
}

updateSize(val) {
  this.setState({ fontSize: val });
}

updateFamily(val) {
  this.setState({ fontFamily: val });
}
```

</details>

## Step 3

### Summary

In this step we will bind `this` to our methods in the `constructor` method in `App.js`.

## Step 4

### Summary

In this step we will `render` our `ColorChanger`, `FamilyChanger`, and `SizeChanger` components in `App.js` with an `update` prop.

## Step 5

### Summary

In this step we will update our `select` elements in the `ColorChanger`, `FamilyChanger`, and `SizeChanger` components to use an `onChange` that calls the `update` prop with the value of the `select` element.

## Step 6

### Summary 

In this step we will create a `componentWillReceiveProps` method that will update the `state` in `TextContainer.js`.

## Step 7 

### Summary

In this step we will `render` the `TextContainer` component in `App.js` with a `fontColor`, `fontSize`, and `fontFamily` prop equal to `fontColor`, `fontSize` and `fontFamily`'s value on `App.js`'s state.


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>