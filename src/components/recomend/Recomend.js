import React, { Component } from 'react';
import RecomendItem from './RecomendItem.js';
import axios from 'axios';
import { recipe_url, apiKey } from '../../config.js';
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
class Recomend extends Component {
  state = {
    recomends: this.defaultPage.data.results,
  };

  componentDidMount() {
    this.defaultPage;
  }
  defaultPage = async () => {
    const res = await axios.get(`${recipe_url}beef&apiKey=${apiKey}`);
    console.log('helo');

    //this.setState({ recomends: res.data.results });
    return res;
  };
  render() {
    return (
      <div style={userStyle}>
        {this.recomends.map((recomend) => (
          <RecomendItem key={recomend.id} recomend={recomend} />
        ))}
      </div>
    );
  }
}

export default Recomend;
