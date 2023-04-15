import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ProductsCategoriesSlider } from "../../components/ProductsCategoriesSlider/ProductsCategoriesSlider";
import { LaunchingSoonSlider } from "../../components/LaunchingSoonSlider/LaunchingSoonSlider";
import AthleteCarousel from "../../components/AthleteCarousel/AthleteCarousel";
import { SpecialOffersCarousel } from "../../components/SpecialOffersCarousel/SpecialOffersCarousel";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsCategoriesSlider />
      <LaunchingSoonSlider />
      <AthleteCarousel />
      <SpecialOffersCarousel />
    </div>
  );
};
