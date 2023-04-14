import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ProductsCategoriesSlider } from "../../components/ProductsCategoriesSlider/ProductsCategoriesSlider";
import { LaunchingSoonSlider } from "../../components/LaunchingSoonSlider/LaunchingSoonSlider";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsCategoriesSlider />
      <LaunchingSoonSlider />
    </div>
  );
};
