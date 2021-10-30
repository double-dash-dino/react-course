import React, { useState } from "react";

const RandomQuoteApp = () => {
  const [quote, setQuote] = useState("a quote");
  const [author, setAuthor] = useState("the author");

  const colours = [];

  let style = { backgroundColor: "blue" };

  const getRandomNumber = () => {
    return Math.round(Math.random() * 101);
  };

  const clickHandler = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        let quoteNumber = getRandomNumber();
        setQuote(responseJson.quotes[quoteNumber].quote);
        setAuthor(responseJson.quotes[quoteNumber].author);
      });
  };

  return (
    <div className="main-page" style={style}>
      <div className="quote-card">
        <h2 className="quote">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          {quote}
        </h2>
        <h5 className="author">- {author}</h5>
        <div className="quote-card-controls">
          <div className="sharing-buttons">
            <a className="btn" href="#">
              <i class="fa fa-twitter fa-3x"></i>
            </a>
            <a className="btn" href="#">
              <i class="fa fa-facebook fa-3x"></i>
            </a>
          </div>
          <div className="new-quote">
            <button className="new-quote-button" onClick={clickHandler}>
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteApp;
