import React from "react";
import "./QuoteCard.css";

function QuoteCard({ randomQuote }) {
  return (
    randomQuote && (
      <div>
        <figure className="QuoteCard">
          <img src={randomQuote.image} alt={randomQuote.character} />
          <figcaption>
            <blockquote>{randomQuote.quote}</blockquote>
            <cite>{randomQuote.character}</cite>
          </figcaption>
        </figure>

        {/* alternate code
        <img src={randomQuote.image} alt={randomQuote.character} />
        <ul>
          <li>
            Name: {randomQuote.character}
          </li>
          <li>Quote: {randomQuote.quote}</li>
  
        </ul>*/}
      </div>
    )
  );
}

export default QuoteCard;
