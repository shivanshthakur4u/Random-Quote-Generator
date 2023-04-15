
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
        <h3 style={{textAlign:"center", marginTop:"200px"}}>No bookmarks yet!</h3>
      )}
    </div>
  );
};

export default BookmarkPage;

