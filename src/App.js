import React from "react";
import Home from "./screens/Home/Home";
import { Switch, Route } from "react-router-dom";
import Works from "./screens/Works/Works";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" children={Home} />
        <Route exact path="/works" children={Works} />
      </Switch>
    </div>
  );
}

export default App;
