import React from "react";

import Navbar from "./components/navbar";
import Banner from './components/banner'
import Cards from './components/cards'
import Search from './components/search';
import Support from "./components/support";
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Cards />
      <Search />
      <Support />
      <Footer />

    </div>
  );
};

export default App;
