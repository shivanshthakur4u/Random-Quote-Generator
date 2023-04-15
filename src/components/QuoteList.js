import React from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/actions";

const QuoteList = ({ quotes }) => {
  const dispatch = useDispatch();

  const handleBookmark = (quotes) => {
    dispatch(addBookmark(quotes));
  };
  

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote._id}>
          <h2>{quote.content}</h2>
          <p>{quote.author}</p>
          <button onClick={() => handleBookmark([quote])}>Bookmark</button>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
