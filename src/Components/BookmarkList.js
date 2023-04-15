import React from "react";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../redux/actions";
import Card from "./Card";
import "./Homepage.css";
const BookmarkList = ({ bookmarks }) => {
  const dispatch = useDispatch();

  const handleRemoveBookmark = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
      {bookmarks.map((bookmark) => (
        
        <Card
           key={bookmark._id}
          quote={bookmark.content}
          author={bookmark.author}
          onRemoveBookmark={() => handleRemoveBookmark(bookmark._id)}
        />
       
      ))}
    </div>
  );
};

export default BookmarkList;

