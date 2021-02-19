import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./splash";
import AuthorShowContainer from "./authors/author_show_container";

const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/authors/:authorId" component={AuthorShowContainer} />
    </Switch>
  </div>
);

export default App;