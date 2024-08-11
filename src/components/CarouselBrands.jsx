import "./CarouselBrands.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Nestle from '../assets/icons/brands/Nestle-300x300.webp';
import Nike from '../assets/icons/brands/Nike-300x300.webp';
import Olx from '../assets/icons/brands/Olx-300x300.webp';
import PeG from '../assets/icons/brands/PG-300x300.webp';
import Picpay from '../assets/icons/brands/Picpay-300x300.webp';
import Bain from '../assets/icons/brands/Bain-300x300.webp';
import Conquer from '../assets/icons/brands/Conquer-300x300.webp';
import Itau from '../assets/icons/brands/Itau-300x300.webp';
import Localiza from '../assets/icons/brands/Localiza-300x300.webp';
import Locaweb from '../assets/icons/brands/Locaweb-300x300.webp';
import Magalu from '../assets/icons/brands/Magalu-300x300.webp';
import Mercadopago from '../assets/icons/brands/Mercado-pago-300x300.webp';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

export default function CarouselBrands(){
    return(
        <>
            <div className="carousel_container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    itemClass="carousel-item-padding-40-px"
                >
                        <img src={Nestle} alt="" />
                        <img src={Nike} alt="" />
                        <img src={Olx} alt="" />
                        <img src={PeG} alt="" />
                        <img src={Picpay} alt="" />
                        <img src={Bain} alt="" />
                        <img src={Conquer} alt="" />
                        <img src={Itau} alt="" />
                        <img src={Localiza} alt="" />
                        <img src={Locaweb} alt="" />
                        <img src={Magalu} alt="" />
                        <img src={Mercadopago} alt="" />
                </Carousel>
            </div>
        </>
    )
}