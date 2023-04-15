import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Bookmarks from "./Pages/BookmarkPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
};

export default App;



