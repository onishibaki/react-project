import React from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDizzy,
  faGrinAlt,
  faSadTear,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Homepage from "./home/HomePage";
import CovidPage from "./covid/CovidPage";
import Header from "./common/Header";
import PagenotFound from "./404";

library.add(faDizzy, faGrinAlt, faSadTear, faSpinner);

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/covid" component={CovidPage} />
        <Route component={PagenotFound} />
      </Switch>
    </div>
  );
};

export default App;
