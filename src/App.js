import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </BrowserRouter>
  );
}

export default App;
