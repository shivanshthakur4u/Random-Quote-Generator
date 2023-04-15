import React, { useState } from "react";
import "../Styles/Homepage.css";
const Card = ({ quote, author, page , action, onRemoveBookmark}) => {
  const [handleButton, setHandleButton] = useState(true);
  return (
    <>
      <div className="card">
        <p className="card-content">{quote}</p>
        <p className="card-author">- {author}</p>
        {page === "Homepage" ? (
          handleButton ?  <button className="card-btn" onClick={()=>{action(); setHandleButton(false)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</button>:<button className="card-btn" onClick={()=>{action(); setHandleButton(true)}}><svg xmlns="http://www.w3.org/2000/svg" fill="#02b875" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></button>
        ) : (
          <button className="card-btn" onClick={onRemoveBookmark}><svg xmlns="http://www.w3.org/2000/svg" fill="#02b875" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></button>
        )}
      </div>

    
    </>
  );
};

export default Card;
