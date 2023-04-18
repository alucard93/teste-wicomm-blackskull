// estilização
import { SpecialOffersCarouselStyled } from './style'

// banco de dados
import { databaseProducts } from '../../database/database'

// componentes
import { Heading } from '../../styles/typography'
import { ProductCard } from '../LaunchingSoonSlider/ProductCard/ProductCard'

export const SpecialOffersCarousel = () => {
  return (
    <SpecialOffersCarouselStyled>
        <div className="container">
        <div className="content">
          <Heading level={2} size={"xxxl"} lineHeight={"37.5px"} color="dark1">
          Promoções
          </Heading>
        </div>
        <section className="content-products">
          <ProductCard databaseProducts={databaseProducts} />
        </section>
      </div>
    </SpecialOffersCarouselStyled>
  )
}
