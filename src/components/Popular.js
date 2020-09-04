import React, { Component } from 'react';
import axios from 'axios';

export class Popular extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7'
      )
      .then((res) => {
        const getPopular = res.data.results;
        this.setState({ popular: getPopular });
      });
  }

  render() {
    return (
      <div>
        <h1
          class='text-center'
          style={{ fontSize: '100px !important', color: 'red' }}
        >
          TOP ARTICLES
        </h1><hr/>
        <br /> 
        {this.state.popular.map((item) => (
          <div>
            <div class='container'>
              <div>
              <br /> 
                <h2 style={{ color: 'teal' }}>{item.title}</h2>
                <p>Abstract: {item.abstract}</p>
                <p>Column: {item.adx_keywords}</p>
                <p>Byline: {item.byline}</p>
                <a href={item.url}>Read more..</a>
              </div>
            </div>
            <br /> <br /> <br /> <br /> 
            <br /><hr/>
          </div>
        ))}
        
      </div>
    );
  }
}

export default Popular;
