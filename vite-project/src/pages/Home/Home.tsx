// estilização
import { HomeStyled } from "./style";

// componentes
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ProductsCategoriesSlider } from "../../components/ProductsCategoriesSlider/ProductsCategoriesSlider";
import { LaunchingSoonSlider } from "../../components/LaunchingSoonSlider/LaunchingSoonSlider";
import AthleteCarousel from "../../components/AthleteCarousel/AthleteCarousel";
import { SpecialOffersCarousel } from "../../components/SpecialOffersCarousel/SpecialOffersCarousel";
import { BlogPostCarousel } from "../../components/BlogPostCarousel/BlogPostCarousel";
import { PersonalObjectivesSlider } from "../../components/PersonalObjectivesSlider/PersonalObjectivesSlider";
import { ExclusiveOffers } from "../../components/ExclusiveOffers/ExclusiveOffers";
import { BrandAbout } from "../../components/BrandAbout/BrandAbout";
import { FixedTop } from "../../components/FixedTop/FixedTop";

export const Home = () => {
  const box = true;
  const money = false;

  return (
    <HomeStyled>
      <HeroSection />
      <ProductsCategoriesSlider />
      <LaunchingSoonSlider />
      <AthleteCarousel />
      <SpecialOffersCarousel />
      <BlogPostCarousel />
      <PersonalObjectivesSlider />
      <section className="content-offers">
        <ExclusiveOffers svg={box} />
        <ExclusiveOffers svg={money} />
      </section>
      <BrandAbout />
      <FixedTop />
    </HomeStyled>
  );
};
