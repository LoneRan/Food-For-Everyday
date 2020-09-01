import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar.js';
import './App.css';
import Welcome from './components/layout/Welcome.js';
import Search from './components/layout/Search.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About.js';
import News from './components/pages/News.js';
import axios from 'axios';
import Bottombar from './components/layout/Bottombar.js';
import Recipe from './components/foodrelated/Recipe.js';
import Recomend from './components/recomend/Recomend.js';
import { recipe_url, apiKey } from './config.js';

class App extends Component {
  state = {
    recipes: [],
    loading: false,
    home: true,
    recomends: [],
  };

  searchGoogle = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`${recipe_url}${text}&apiKey=${apiKey}`);
    console.log(res.data);

    this.setState({ recipes: res.data.results, loading: false, home: false });
  };

  searchhome = async () => {
    this.setState({ loading: true });
    const res = await axios.get(`${recipe_url}beef&apiKey=${apiKey}`);
    console.log('hello');

    this.setState({ recipes: res.data.results, loading: false });
  };

  /*
  searchGoogle = (text) => {
    
    this.setState({ loading: true });
    const request = new XMLHttpRequest();
    request.open('GET', `./recipe/${text}.json`, false);
    request.send(null);
    
    const beef =
      '{"name": "Guinness® Corned Beef","id": 1,"url": "https://www.allrecipes.com/video/9071/guinness-corned-beef/?internalSource=hub%20recipe&referringId=200&referringContentType=Recipe%20Hub","img_url": "https://images.media-allrecipes.com/userphotos/300x300/3428896.jpg"}';

    const res = JSON.parse(beef);
    this.setState({ recipes: res, loading: false });
    console.log('2');
    
    fetch(`./recipe/${text}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('2');
        console.log('data:', data);
        this.setState({ recipes: data, loading: false });
      });
      
  };
*/
  render() {
    const { recipes, loading, home } = this.state;
    this.searchhome;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            　
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Welcome />

                    <Search searchGoogle={this.searchGoogle} />

                    <Recipe recipes={recipes} />
                    {home ? <div /> : <div></div>}
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>
                    <h1 style={{ color: 'transparent' }}>can not see me </h1>

                    <h1> </h1>
                    <h1> </h1>
                    <h1> </h1>
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/about'
                render={(props) => (
                  <Fragment>
                    <About />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/news'
                render={(props) => (
                  <Fragment>
                    <News />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
          <Bottombar />
        </div>
      </Router>
    );
  }
}

export default App;
