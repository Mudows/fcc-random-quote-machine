import React, { useState, useEffect } from "react";
import fetchQuote from "../helpers/randomQuoteApi";

export default function QuoteBox () {
  const [quoteData, setQuoteData] = useState({content: 'data' });

  useEffect(() => {
    fetchQuote(setQuoteData)
  }, [])

  return (
    <div id="quote-box">
      {quoteData && (<><p id="text">{quoteData.content}</p>
      <p id="author">{quoteData.author}</p></>)}
      <button
        type="button"
        id="new-quote"
        onClick={ ()=> fetchQuote(setQuoteData) }
      >
        New Quote
      </button>
    </div>
  )
};
