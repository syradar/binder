/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import React from "react";
import "./App.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div tw="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        Binder
        {/* <Switch>
                <Route exact path="/">
                  <Names />
                </Route>
                </Switch> */}
      </div>
    </Router>
  );
}

export default App;
