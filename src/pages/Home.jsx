import React from "react";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Products from "../component/Products";
import Slider from "../component/Slider";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
