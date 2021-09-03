import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
