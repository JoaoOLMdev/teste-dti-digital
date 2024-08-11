import "./CarouselPartners.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AgileTrend from '../assets/icons/partners/agile-trend.png';
import AgileSummit from '../assets/icons/partners/agile-summit.webp';
import Febraban from '../assets/icons/partners/febraban.webp';
import IotSolutions from '../assets/icons/partners/iot-solutions.png';
import ProductCamp from '../assets/icons/partners/product-camp.webp';

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

export default function CarouselPartners(){
  return(
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
              <div className="carousel_item">
                  <img src={AgileTrend} alt="Agile Trend" className="carousel_img"/>
              </div>
              <div className="carousel_item">
                  <img src={AgileSummit} alt="Agile Summit" className="carousel_img"/>
              </div>
              <div className="carousel_item">
                  <img src={Febraban} alt="Febraban" className="carousel_img"/>
              </div>
              <div className="carousel_item">
                  <img src={IotSolutions} alt="IoT Solutions" className="carousel_img"/>
              </div>
              <div className="carousel_item">
                  <img src={ProductCamp} alt="Product Camp" className="carousel_img"/>
              </div>
          </Carousel>
      </div>
  )
}