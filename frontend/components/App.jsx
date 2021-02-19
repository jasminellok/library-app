import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthorIndexContainer from "./authors/author_index_container";
import AuthorShowContainer from "./authors/author_show_container";

const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={AuthorIndexContainer} />
        <Route exact path="/authors/:authorId" component={AuthorShowContainer} />
    </Switch>
  </div>
);

export default App;