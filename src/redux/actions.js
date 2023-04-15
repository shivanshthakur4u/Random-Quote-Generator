import axios from "axios";
import {
  SET_QUOTE,
  SET_IS_LOADING,
  SET_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "./types";
import { toast } from 'react-toastify';
export const getRandomQuote = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await axios.get("https://api.quotable.io/random");
    dispatch(setQuote(response.data));
    dispatch(setIsLoading(false));
  };
};

export const getRandomQuoteByTag = (tag) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `https://api.quotable.io/random?tags=${tag}`
    );
    dispatch(setQuote(response.data));
    dispatch(setIsLoading(false));
  };
};

export const getBookmarks = () => {
  return async (dispatch) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const uniqueBookmarks = bookmarks.reduce((acc, bookmark) => {
      const existingBookmark = acc.find(bm => bm._id === bookmark._id);
      if (!existingBookmark) {
        acc.push(bookmark);
      }
      return acc;
    }, []);
    dispatch(setBookmarks(uniqueBookmarks));
  };
};



export const addBookmark = (quote) => {
  return async (dispatch, getState) => {
    const { bookmarks } = getState();
    const isQuoteAlreadyBookmarked = bookmarks.some(
      (bookmark) => bookmark.content === quote.content
    );
    if (isQuoteAlreadyBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.content !== quote.content
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      dispatch({ type: SET_BOOKMARKS, payload: updatedBookmarks });
      toast.error("Successfully Removed from bookmarks.");
      return;
    }
    const newBookmark = { ...quote, _id: Date.now() };
    const updatedBookmarks = [...bookmarks, newBookmark];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    dispatch({ type: ADD_BOOKMARK, payload: newBookmark });
    toast.success("Quote added to bookmarks.");
  };
};






export const removeBookmark = (id) => {
return async (dispatch, getState) => {
const { bookmarks } = getState();
const updatedBookmarks = bookmarks.filter(
(bookmark) => bookmark._id !== id
);
localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
dispatch(setBookmarks(updatedBookmarks));
dispatch({ type: REMOVE_BOOKMARK, payload: id });
};
};

export const setQuote = (quote) => ({
type: SET_QUOTE,
payload: quote,
});

export const setIsLoading = (isLoading) => ({
type: SET_IS_LOADING,
payload: isLoading,
});

export const setBookmarks = (bookmarks) => ({
  type: SET_BOOKMARKS,
  payload: [...bookmarks],
});
