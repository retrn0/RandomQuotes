import React, { Component } from 'react';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      author: 'someone very smart',
      quote: 'something very profound and inspirational'
    };
    this.getQuote = this.getQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
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
  componentDidMount() {
    this.getQuote();
  }
  tweetQuote() {
    console.log('tweet me do not console log me');
  }
  render() {
    return (
      <div className="wrapper">
        <i className="fa fa-quote-left fa-3x quote"> </i>
        <span className="quote"> {this.state.quote}</span>
        <p className="author">
          <i>{`--${this.state.author}`}</i>
        </p>
        <div className="footer">
          <button className="btn-quote" onClick={this.getQuote}>
            New Quote
          </button>
          <a href="#" onClick={this.tweetQuote}>
            <i
              className="fa fa-twitter-square fa-3x tweet-me"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Quotes;
