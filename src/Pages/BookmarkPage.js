
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "../redux/actions";
import BookmarkList from "../components/BookmarkList";

const BookmarkPage = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.length > 0 ? (
        <BookmarkList bookmarks={bookmarks} />
      ) : (
        <h2 style={{textAlign:"center", marginTop:"200px", color:"#E90064"}}>No bookmarks yet!</h2>
      )}
    </div>
  );
};

export default BookmarkPage;

