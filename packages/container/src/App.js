import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Home from "./components/Home";

export default function () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/marketing" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
