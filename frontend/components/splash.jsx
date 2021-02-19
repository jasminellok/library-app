import React from "react";
import AuthorIndexContainer from "./authors/author_index_container";
import BookIndexContainer from "./books/book_index_container";

const Splash = () => (
  <div>
        <AuthorIndexContainer/>
        <BookIndexContainer/>
  </div>
);

export default Splash;