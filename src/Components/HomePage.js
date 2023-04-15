import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getRandomQuote, getRandomQuoteByTag,addBookmark, getBookmarks } from "../redux/actions";
import TagList from "./TagList";
import Loader from './Loader';
import './Homepage.css';
import "../index.css";
import Card from "./Card";
const HomePage = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const isLoading = useSelector((state) => state.isLoading);



//   useEffect(() => {
//     dispatch(getRandomQuote());
//   }, [dispatch]);

  useEffect(() => {
    dispatch(getBookmarks()); // load stored bookmarks
    dispatch(getRandomQuote());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

//   const handleGetRandomQuote = () => {
//     dispatch(getRandomQuote());
//   };

//   const handleAddBookmark = () => {
//     dispatch(addBookmark(quote));
//   };

  const handleRandomQuote = () => {
    dispatch(getRandomQuote());
  };

  const handleTagSelect = (tag) => {
    dispatch(getRandomQuoteByTag(tag));
  };

  const handleAddBookmark = () => {
     
      dispatch(addBookmark(quote));
     
  };
 

  return (
    <div className="wrapper">
    <h1>Random Quote Generator</h1>
     {isLoading ? (
  <Loader/>
) : (
  <div>
  <Card quote={quote.content}  author={quote.author} page={"Homepage"} name={"Add To bookmark"} action={handleAddBookmark}/>
    <div style={{ display: "flex", alignItems: "center" }}>
    </div>
    <TagList onSelect={handleTagSelect} />
    <div className="wrapper"><button  onClick={handleRandomQuote}>Generate Quote</button></div>
   
    <ToastContainer />


   
  </div>
)}

    </div>
  );
};



export default HomePage;



