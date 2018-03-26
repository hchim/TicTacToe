React has a few different kinds of components, but we’ll start with React.Component subclasses:

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```


Your components tell React what you want to render – then React will efficiently update and render 
just the right components when your data changes. Here, ShoppingList is a React component class, or 
React component type. A component takes in parameters, called `props`, and returns a hierarchy of views 
to display via the `render` method.

The `render` method returns a description of what you want to render, and then React takes that description 
and renders it to the screen. In particular, render returns a React element, which is a lightweight description 
of what to render. Most React developers use a special syntax called **JSX** which makes it easier to write 
these structures. The `<div />` syntax is transformed at build time to React.createElement('div'). 

### An Interactive Component

Let’s make the Square component fill in an “X” when you click it. Try changing the button tag returned in the 
`render()` function of the Square like this:

```
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

If you click on a square now, you should get an alert in your browser.
Note that we’re passing a function as the onClick prop.

React components can have state by setting `this.state` in the constructor, which should be considered private to 
the component. Let’s store the current value of the square in state, and change it when the square is clicked.

First, add a constructor to the class to initialize the state:

```
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

In JavaScript classes, you need to explicitly call super(); when defining the constructor of a subclass.
Now change the Square render method to display the value from the current state, and to toggle it on click:

Replace `this.props.value` with this.state.value inside the `<button>` tag.
Replace the `() => alert()` event handler `with () => this.setState({value: 'X'})`.

Now the `<button>` tag looks like this:
```
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
```

Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in 
the passed state update and rerender the component along with its descendants. When the component rerenders, 
this.state.value will be 'X' so you’ll see an X in the grid.

