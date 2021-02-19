import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import AuthorShowContainer from "./authors/author_show_container";
import BookShowContainer from "./books/book_show_container";

const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/authors/:authorId" component={AuthorShowContainer} />
        <Route exact path="/books/:bookId" component={BookShowContainer} />
    </Switch>
  </div>
);

export default App;