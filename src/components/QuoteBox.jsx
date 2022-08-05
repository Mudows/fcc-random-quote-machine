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
      <div className="row mb-5">
        <button
          type="button"
          id="new-quote"
          className="btn btn-success col-3 mx-auto"
          onClick={ ()=> fetchQuote(setQuoteData) }
        >
          New
        </button>
        &nbsp;&nbsp;
        <a
          id="tweet-quote"
          className="btn btn-primary col-3 mx-auto"
          href="twitter.com/intent/tweet"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
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
