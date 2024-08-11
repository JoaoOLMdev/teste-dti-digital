import "./CarouselFeedbacks.css";

import Carousel from 'react-bootstrap/Carousel';

import Vitor from '../assets/img/feedbacks/Vitor-pecanha.webp';
import GustavoGreco from '../assets/img/feedbacks/Gustavo-Greco.webp';
import GustavoCarriconde from '../assets/img/feedbacks/Gustavo-Carriconde.webp';
import RenataHorta from '../assets/img/feedbacks/Renata-Horta.webp';
import JoaoResende from '../assets/img/feedbacks/Joao-Resende.webp';
import CristianeCostaSimons from '../assets/img/feedbacks/Cristiane-Costa-Simons.webp';


export default function CarouselFeedbacks(){
    return(
        <>
            <div className='body'>
            <Carousel>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={Vitor} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>Vitor Peçanha</h3>
                            <h4 className='carousel_subtitle'>Co-fundador da Rock Content</h4>
                            <p className='carousel_text'>"Participar d'Os Agilistas foi um prazer, pois foi uma conversa espontânea e fluída, o que, ao mesmo tempo, tornou o papo bem mais interessante e valioso do que se tivéssemos seguido um script à risca. É um ótimo conteúdo que provoca os ouvintes a parar, refletir e melhorar a maneira como eles trabalham"</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={GustavoGreco} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>Gustavo Greco</h3>
                            <h4 className='carousel_subtitle'>Fundador da Greco Design</h4>
                            <p className='carousel_text'>"Foi um bate-papo agradável com perguntas inteligentes. O podcast aborda e valoriza os processos individuais e a importância de se colocar as ideias de pé no mundo. Os conteúdos falam de negócios, comportamento, mudanças e, principalmente, pessoas."</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={GustavoCarriconde} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>Gustavo Carriconde</h3>
                            <h4 className='carousel_subtitle'>CEO Gutenberg Venture Builder e fundador do ResumoCast</h4>
                            <p className='carousel_text'>"Adorei gravar um episódio com os Agilistas, sou ouvinte e sempre consigo aprender algo inovador a cada podcast"</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={RenataHorta} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>Renata Horta</h3>
                            <h4 className='carousel_subtitle'>Fundadora e Diretora de Conhecimento e Inovação da Troposlab</h4>
                            <p className='carousel_text'>"Os Agilistas é garantia de trabalhar temas importantes com senso crítico, profundidade e leveza. Adorei a interlocução e a troca que permitem a gente ressignificar nossas experiências."</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={JoaoResende} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>João Resende</h3>
                            <h4 className='carousel_subtitle'>Co-fundador da Toro investimentos</h4>
                            <p className='carousel_text'>"Vocês são referência em agilidade pra mim, foi ótimo poder
                            dividir e aprender com Szuster no podcast"</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_feedback'>
                        <img src={CristianeCostaSimons} alt=""  className='carousel_img'/>
                        <div className='carousel_feedback_texts'>
                            <h3 className='carousel_title'>Cristiane Costa Simons</h3>
                            <h4 className='carousel_subtitle'>Líder de Tribo</h4>
                            <p className='carousel_text'>"Os agilistas apresenta conteúdo de qualidade sobre tecnologia, agilidade e produtos digitais respeitando o momento dos profissionais e das empresas. Você encontrará caminhos com possíveis respostas para seus desafios."</p>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}