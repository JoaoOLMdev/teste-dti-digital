import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/variables.css';
import './assets/styles/global.css';

import Header from './components/Header'
import CarouselBanners from './components/CarouselBanners'
import CarouselHosts from './components/CarouselHosts';
import CarouselBrands from './components/CarouselBrands';
import CarouselPartners from './components/CarouselPartners';
import Cards from './components/Cards';
import CarouselFeedbacks from './components/CarouselFeedBacks';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header />
      <body>
        <CarouselBanners />
        <section className='section'>
          <h1 className='title'>Sobre Os Agilistas</h1>
          <p>Sempre acreditamos na capacidade do agilismo para transformar o mercado e afetar positivamente os negócios, pessoas, serviços e produtos envolvidos. <b>Então, por que não compartilhar essa crença com o mundo?</b> O DNA agilista corria em nossas veias já há quase duas décadas quando, em 2018, decidimos que era hora de <b>expandir esse movimento para fora,</b> dividindo as nossas experiências – e as de outros – para quem quisesse ouvir.<b>E foi daí que surgiu Os Agilistas, o maior podcast sobre agilismo do Brasil!</b></p>
          <p>Hoje, percebemos Os Agilistas como muito mais do que apenas um podcast: <b>somos uma comunidade formada por pessoas que se interessam, acreditam e vivem o agilismo.</b> Pessoas que veem o ágil como a melhor forma para gerir negócios e responder às constantes – e inevitáveis – mudanças de contexto. Pessoas que desejam, pouco a pouco, <b>transformar o mundo empresarial.</b></p>
          <p><b>E tudo começou com um: “bora fazer um podcast? “Bora!”</b></p>
        </section>
        <div className='container_image'>
          <h1 className='container_title_image'>Conheça <br/> os Agilistas</h1>
          <button className='container_button'>Ouça nossos episódios</button>
        </div>
        <section className='section'>
          <h1 className='title'>Sobre os hosts</h1>
          <CarouselHosts/>
        </section>
        <section className='section'>
          <h1 className='title'>Quem já passou pelo podcast</h1>
          <CarouselBrands/>
          <h1 className='title'>Parceiros</h1>
          <CarouselPartners/>
          <div className='center_div'>
            <button className='newsletter_button'>Inscreva-se na nossa newsletter!</button>
          </div>
        </section>
        <section className='section'>
          <h1 className='title'>Coluna Ágil</h1>
          <div className='center_div'>
            <Cards/>
          </div>
        </section>
        <section className='section'>
          <h1 className='title'>O que dizem sobre Os Agilistas</h1>
          <CarouselFeedbacks/>
        </section>
        <Footer/>
      </body>
    </>
  )
}

export default App
