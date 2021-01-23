import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Aum', age: 23 },
      { name: 'Steph', age: 33 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was click!');
    // this.state.persons[0].name = 'Pathomrat'; -- Don't Do this!
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: newName, age: 23 },
        { name: 'Steph', age: 34 }
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 23 },
        { name: 'Steph', age: 34 }
      ],
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App" >
        <h1>Hi , I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {
          this.state.showPerson ?
            < div >
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Pathomrat!')}
                changed={this.nameChangedHandler}>My hobbies : basketball </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
  }
}

export default App;
