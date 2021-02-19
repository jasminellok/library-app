import React from "react";
import { Route, Switch } from "react-router";
import AuthorIndexContainer from "./authors/author_index_container";

const App = () => (
  <div>
    <AuthorIndexContainer />
  </div>
);

export default App;