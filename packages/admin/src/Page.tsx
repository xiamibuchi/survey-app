import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";

function Page() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/app/dashboard/index" push />}
        />
        <Route path="/app" component={App} />
        <Route path="/404" component={NotFound} />
        {/* <Route path="/login" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default Page;
