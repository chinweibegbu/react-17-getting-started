import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';
import testData from './testData';

// Define a class component
class App extends Component {
  // TASK Initialise a state object

  // Method #1: Using a constructor call
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   }
  // }

  // Method #2: Using a class field
  state = {
    // profiles: testData,
    profiles: []
  }

  addNewProfile = (newProfile) => {
    console.log(newProfile);
    this.setState( prevState => ({
      profiles: [...prevState.profiles, newProfile]
    }));
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
        <Form onSubmit={this.addNewProfile} />
        {/* Refer to the profiles from the state instance variable */}
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
