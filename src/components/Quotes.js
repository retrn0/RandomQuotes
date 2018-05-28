import React, { Component } from 'react';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      author: 'someone very smart',
      quote: 'something very profound and inspirational'
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    console.log('sit tight, serving a fresh quote...');
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com', {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'CtFcasdiGbmshEFIU6cNdjXQV23sp1LEYOXjsnjucduo7RglJ6'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          author: data[0].author,
          quote: data[0].quote
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <h4> {this.state.author} </h4>
        <button onClick={this.getQuote}> Quote Me </button>
      </div>
    );
  }
}

export default Quotes;
