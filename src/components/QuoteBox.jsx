import React, { useState, useEffect } from "react";
import fetchQuote from "../helpers/randomQuoteApi";

export default function QuoteBox () {
  const [quoteData, setQuoteData] = useState({content: 'data' });

  useEffect(() => {
    fetchQuote(setQuoteData)
  }, [])

  return (
    <div
      className="container-md col-8 mt-5"
      id="quote-box"
    >
      <div className="mx-auto mb-5">
        <button
          type="button"
          id="new-quote"
          className="btn btn-success"
          onClick={ ()=> fetchQuote(setQuoteData) }
        >
          New Quote
        </button>
        &nbsp;&nbsp;
        <a
          id="tweet-quote"
          className="btn btn-primary"
          href="twitter.com/intent/tweet"
        >
          Tweet Quote
        </a>
      </div>
      {quoteData && (
        <>
          <h1 className="text-center" id="text">{`"${quoteData.content}"`}</h1>
          <h4 className="text-center" id="author">{`- ${quoteData.author}`}</h4>
        </>
      )}
    </div>
  )
};
