import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div>
      <HeroSlider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
}

export default Home;
