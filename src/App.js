import React from "react";
import { Route, Switch } from "react-router-dom"

import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/products" component={Products}/>
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />

    </div>
  );
};

export default App;
