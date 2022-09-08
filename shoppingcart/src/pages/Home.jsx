
import React from "react";
import Announcements from "../Components/Announcements";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
