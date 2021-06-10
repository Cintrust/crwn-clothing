import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
        <Header/>
      <Switch>
        <Route path="/" exact={true} component={HomePage}/>
        <Route path="/shop" exact={true} component={ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
