import {
  SET_QUOTE,
  SET_IS_LOADING,
  SET_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "./types";

const initialState = {
  quote: {},
  isLoading: false,
  bookmarks: [],
  bookmarkList: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return { ...state, quote: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_BOOKMARKS:
      return { 
        ...state, 
        bookmarks: action.payload, 
        bookmarkList: action.payload.map((bookmark) => bookmark._id),
      };
    case ADD_BOOKMARK:
      const existingBookmark = state.bookmarks.find(
        (bookmark) => bookmark._id === action.payload._id
      );
      if (existingBookmark) {
        return {
          ...state,
          message: "Bookmark already exists",
        };
      } else {
        return {
          ...state,
          bookmarks: [...state.bookmarks, action.payload],
          bookmarkList: [...state.bookmarkList, action.payload._id],
          message: "Bookmark added successfully",
        };
      }
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark._id !== action.payload
        ),
        bookmarkList: state.bookmarkList.filter(
          (bookmarkId) => bookmarkId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducers;
