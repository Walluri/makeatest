import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateATest from "../pages/CreateATest";
import ListTests from "../pages/ListTests";
import Home from "../pages/Home";
import TakeATest from "../pages/TakeATest";
function RouteActions() {
  return (
    <div>
      <Switch>
        <Route path="/create">
          <CreateATest />
        </Route>
        <Route path="/list">
          <ListTests />
        </Route>
        <Route path="/take">
          <TakeATest />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default RouteActions;
