import React, { Component } from 'react';

import { UserContext } from './userContext';

class AddForm extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.addLang(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Add new Language'
        />
        <input type='submit' value='Add' />
      </form>
    );
  }
}

AddForm.contextType = UserContext;

export default AddForm;
