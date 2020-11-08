import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import MultipleReporter from "./components/MultipleReporter";
import NotFound from "./components/NotFound"
import Details from "./components/Details"

export default class Speakly extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/multipleReporter" component={MultipleReporter} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
