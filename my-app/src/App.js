import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.js';
import './App.css';
import Welcome from './components/layout/Welcome.js';
import Search from './components/layout/Search.js';
import SearchResult from './components/layout/SearchResult.js';
import axios from 'axios';

class App extends Component {
  state = {
    data: '',
    loading: false,
  };

  searchGoogle = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://www.google.com/search?q=${text}`);
    console.log(res.data);
    console.log('hello');
    this.setState({ data: res.data.items, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Welcome />
        <Search searchGoogle={this.searchGoogle} />
        <SearchResult />
      </div>
    );
  }
}

export default App;
