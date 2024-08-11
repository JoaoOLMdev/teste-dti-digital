import "./Cards.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Fintech from '../assets/img/cards/fintech.webp';
import Melhoria from '../assets/img/cards/melhoria.webp';
import Inteligencia from '../assets/img/cards/inteligencia.webp';


export default function Cards(){
    return(
        <>
        <body className='container_cards'>            
            <Card className="cards">
                <Card.Img variant="top" src={Fintech} />
                    <Card.Body className="card_body">
                        <Card.Title className="card_title">Fintech como modelo de estratégia e inovação digital</Card.Title>
                            <Card.Text className="card_text">
                            Descubra as lições que o modelos de negócios das fintechs tem a oferecer
                            </Card.Text>
                        <a variant="primary" className="card_link">LEIA MAIS</a>
                    </Card.Body>
            </Card>
            <Card className="cards">
                <Card.Img variant="top" src={Melhoria} />
                    <Card.Body className="card_body">
                        <Card.Title className="card_title">As ferramentas de melhoria contínua que você precisa dominar</Card.Title>
                            <Card.Text className="card_text"> 
                            Descubra como as ferramentas de melhoria contínua podem impulsionar o seu negócio.
                            </Card.Text>
                        <a variant="primary" className="card_link">LEIA MAIS</a>
                    </Card.Body>
            </Card>
            <Card className="cards">
                <Card.Img variant="top" src={Inteligencia} />
                    <Card.Body className="card_body">
                        <Card.Title className="card_title">Como implementar a inteligência de mercado no seu negócio</Card.Title>
                            <Card.Text className="card_text">
                            Descubra como essa estratégia pode elevar o seu negócio
                            </Card.Text>
                        <a variant="primary" className="card_link">LEIA MAIS</a>
                    </Card.Body>
            </Card>
        </body>
        </>
    )
}