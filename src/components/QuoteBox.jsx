import React, { useState, useEffect } from "react";
import fetchQuote from "../helpers/randomQuoteApi";

export default function QuoteBox () {
  const [quoteData, setQuoteData] = useState({content: 'data' });

  useEffect(() => {
    fetchQuote(setQuoteData)
  }, [])

  return (
    <div
      className="container col-8 mt-5"
      id="quote-box"
    >
      <div className="row mb-5 col-6 mx-auto">
        <button
          type="button"
          id="new-quote"
          className="btn btn-success col-5"
          onClick={ ()=> fetchQuote(setQuoteData) }
        >
          New Quote
        </button>
        &nbsp;&nbsp;
        <a
          id="tweet-quote"
          className="btn btn-primary col-5"
          href="twitter.com/intent/tweet"
          target="_blank"
        >
          Tweet Quote&nbsp;&nbsp;<i class="fa-brands fa-twitter"></i>
        </a>
      </div>
      {quoteData && (
        <>
          <h1 className="text-center" id="text">{`"${quoteData.content}"`}</h1>
          <h4 className="text-end mt-3" id="author"><em>{`- ${quoteData.author}`}</em></h4>
        </>
      )}
    </div>
  )
};
