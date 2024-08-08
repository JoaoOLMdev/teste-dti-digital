import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/variables.css';
import './assets/styles/global.css';

import Header from './components/Header'
import CarouselComponent from './components/CarouselComponent'

function App() {
  

  return (
    <>
      <Header />
      <body>
        <CarouselComponent />
        <section className='section1'>
          <h1 className='title'>Sobre Os Agilistas</h1>
          <p>Sempre acreditamos na capacidade do agilismo para transformar o mercado e afetar positivamente os negócios, pessoas, serviços e produtos envolvidos. <b>Então, por que não compartilhar essa crença com o mundo?</b> O DNA agilista corria em nossas veias já há quase duas décadas quando, em 2018, decidimos que era hora de <b>expandir esse movimento para fora,</b> dividindo as nossas experiências – e as de outros – para quem quisesse ouvir.<b>E foi daí que surgiu Os Agilistas, o maior podcast sobre agilismo do Brasil!</b></p>
          <p>Hoje, percebemos Os Agilistas como muito mais do que apenas um podcast: <b>somos uma comunidade formada por pessoas que se interessam, acreditam e vivem o agilismo.</b> Pessoas que veem o ágil como a melhor forma para gerir negócios e responder às constantes – e inevitáveis – mudanças de contexto. Pessoas que desejam, pouco a pouco, <b>transformar o mundo empresarial.</b></p>
          <p><b>E tudo começou com um: “bora fazer um podcast? “Bora!”</b></p>
        </section>
      </body>
    </>
  )
}

export default App
