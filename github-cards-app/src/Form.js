import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = { userName: '' }

  handleSubmit = async (event) => {
    event.preventDefault();

    // Use the Axios library to query an HTTP link
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    
    // Use the data returned from the API call
    this.props.onSubmit(response.data);

    // Reset the input field to empty
    this.setState({userName: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='GitHub username'
          value={this.state.userName}
          onChange={ event => this.setState({userName: event.target.value }) }
          required />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
