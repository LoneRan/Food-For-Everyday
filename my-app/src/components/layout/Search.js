import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchGoogle(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search what you want'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn bth-dark btn-block'
        />
      </form>
    );
  }
}

export default Search;
