import React, { Component } from "react";
import Person from "./Person";
import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { id: "dudu", name: "Ram", age: "20" },
      { id: "wjow", name: "Shyam", age: "25" },
      { id: "ywey", name: "Mohan", age: "28" }
    ],
    otherState: "Default state",
    showPersons: false,
    count: 0
  };

  switchNameHandler = newName => {
    console.log(newName);
    this.setState({
      persons: [
        { name: "Rahul", age: "20" },
        { name: newName, age: "25" },
        { name: "Mohan", age: "29" }
      ]
    });
  };
  // The event object is automatically passed by JavaScript.
  nameChangedHandler = (event, id) => {
    // We want to update the state of the person but only for one into which input field we typed
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Not a good practice to mutate state directly. A person in persons array is a javascript object. JavaScript objects are reference types. So we should not mutate them directly bcz we only get a pointer when we reach put to person in the next statement. Hence we would mutate the original object to which a pointer points.
    //const person = this.state.persons[personIndex];

    // Better approach (ES6)
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alternative approach
    //const person = Object.assign({}, this.state.persons[personIndex]);

    // Manipulating the copied object, not the original one
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  handleCountChange = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    }
    )
  };

  render() {
    return (
      <div className="App">
        <h1> Hello React!</h1>
        <button onClick={this.switchNameHandler.bind(this, "Ramavatar")}>
          Switch name
        </button>

        {/* Add a property 'click' and pass ref to handler click={this.SwitchNameHandler} */}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Ram Krishna")}
          changed={event =>
            this.nameChangedHandler(event, this.state.persons[1].id)
          }
          count={this.state.count}
          clicked={this.handleCountChange.bind(this)}
        >
          My Hobby : TT
        </Person>

      </div>
    );
  }
}

export default App;
