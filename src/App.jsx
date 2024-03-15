import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Services from "./components/Services";

import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

       

        <div id="services">
          <Services />
        </div>

        

        <div id="blog">
          <Blogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
