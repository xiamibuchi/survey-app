import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import "./App.css";

function App() {
  let state = store.getState();
  store.subscribe(handleStoreChange);

  const [inputValue, setInputValue] = useState(state.inputValue);

  function handleInputChange(e: any): void {
    const action = {
      type: "CHANGE_TOKEN",
      value: e.target.value,
    };
    console.log(e.target.value);
    store.dispatch(action);
    state = store.getState();
    console.log(state);
    setInputValue(state.inputValue);
  }

  function handleStoreChange() {
    console.log(22323);
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
          <input
            value={state.inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={handleInputChange}
          ></input>
          <div>{inputValue}</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
