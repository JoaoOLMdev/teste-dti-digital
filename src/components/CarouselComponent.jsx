import Carousel from 'react-bootstrap/Carousel';

import carrossel1 from '../assets/img/carrossel1.webp';
import carrossel2 from '../assets/img/carrossel2.webp';
import carrossel3 from '../assets/img/carrossel3.webp';

export default function CarouselComponent(){
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img src={carrossel1} alt="carrossel1" className='d-block w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={carrossel2} alt="carrossel2" className='d-block w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={carrossel3} alt="carrossel3" className='d-block w-100'/>
            </Carousel.Item>
        </Carousel>
        </>
    )
}