import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import TodoList from "./components/Todolist";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <TodoList>2222</TodoList>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
