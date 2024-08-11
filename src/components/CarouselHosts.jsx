import Carousel from 'react-bootstrap/Carousel';
import Pedro from '../assets/img/hosts/Pedro.webp';
import Marcelo from '../assets/img/hosts/Marcelo-Szuster.webp';
import Vinicius from '../assets/img/hosts/Vinicius.webp';
import Diulia from '../assets/img/hosts/Diulia.webp';

import "./CarouselHosts.css";

export default function CarouselHosts(){
    return(
        <>
        <div className='body'>
            <Carousel>
                <Carousel.Item>
                    <section className='carousel_hosts'>
                        <img src={Pedro} alt=""  className='carousel_img'/>
                        <div className='carousel_hosts_texts'>
                            <h3 className='carousel_title'>Pedro Rangel</h3>
                            <p className='carousel_text'><b>Entusiasta do agilismo e do mundo digital,</b> Pedro é natural de Belo Horizonte e formado em <b>Engenharia de Controle e Automação pela UFMG e MBA em Gestão Empresarial pela FGV.</b> Já navegou por diferentes papéis no agilismo, atendendo a grandes clientes da dti desde 2019.</p>
                            <p className='carousel_text'>Adora mergulhar em conversas sobre <b>produtos, liderança e inovação.</b> Quem conhece sabe que ele aprecia um bom churrasco e que sua vira-lata caramelo é a dona da casa.</p>

                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_hosts'>
                        <img src={Marcelo} alt=""  className='carousel_img'/>
                        <div className='carousel_hosts_texts'>
                            <h3 className='carousel_title'>Marcelo Szuster</h3>
                            <p className='carousel_text'>Sabe aquela velha sentença “eu lembro quando aqui era só mato”? Então, lá em 2002, quando quase ninguém ainda falava sobre agilismo,<b>Marcelo Szuster foi um dos pioneiros em defender o recém-criado “Manifesto Ágil” e apoiar essa nova filosofia.</b></p>
                            <p className='carousel_text'>Belo-horizontino, casado e pai de três filhos, Szuster é um leitor ávido – mas não acredita na expressão “livro favorito” – e apaixonado por esportes – principalmente, tênis. Formado em engenharia elétrica pela UFMG, o <b>nosso host é um dos fundadores da dti digital,</b> empresa de tecnologia integrante da global WPP, e é <b>fã de uma boa conversa!</b></p>

                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_hosts'>
                        <img src={Vinicius} alt=""  className='carousel_img'/>
                        <div className='carousel_hosts_texts'>
                            <h3 className='carousel_title'>Vinícius Paiva</h3>
                            <p className='carousel_text'><b>Engenheiro de formação e agilista de coração,</b> Vinicius Paiva – ou Vinição, para os mais íntimos – também é nascido e criado na capital mineira, casado e pai de duas filhas. Além disso, ele não perde um futebol com os amigos e “Breaking Bad” está no topo da sua lista de séries favoritas.</p>
                            <p className='carousel_text'>Se você acompanha o podcast, já sabe que livros sobre <b>comportamento, complexidade, pessoas e liderança</b> não saem da estante do Vinição. E, assim como Szuster, <b>a sua relação com o agilismo já tem anos de história e foi um dos motivadores para fundar a dti digital, em 2009, e dar início ao projeto “Os Agilistas”</b>.</p>

                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <section className='carousel_hosts'>
                        <img src={Diulia} alt=""  className='carousel_img'/>
                        <div className='carousel_hosts_texts'>
                            <h3 className='carousel_title'>Diulia Almada</h3>
                            <p className='carousel_text'>A Diulia é mineira de nascença e de coração, mas em qualquer oportunidade que tem quer descobrir e aprender sobre lugares novos. <b>Designer gráfico de formação pela UEMG e pós-graduada em Design de Interação pela PUC Minas,</b> apaixonada por psicologia e design de serviços, se encanta pela complexidade que nos exige um olhar cada vez mais sistêmico.</p>
                            <p className='carousel_text'>Casada e mãe do Thomás, tem aprendido a ver o mundo por diversos olhares, através de boas conversas e do olhar atento para a vida acontecendo dentro e fora das telas.</p>

                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className='carousel_image'/>
                        </div>
                    </section>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}