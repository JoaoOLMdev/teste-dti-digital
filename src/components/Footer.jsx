import "./Footer.css";

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';

import Spotify from '../assets/icons/socialmedias/Spotify-icon.svg';
import Instagram from '../assets/icons/socialmedias/Instagram-icon.png';


export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="div_footer">
                <div className="first_floor">
                    <div className='footer_contact_div'>
                        <a href="" className="footer_link">Fale com a gente</a>
                        <p>osagilistas@dtidigital.com.br</p>
                        <div className='footer_icons_div'>
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-256.png" alt=""  className="footer_icons"/>
                            <img src={Spotify} alt="" className="footer_icons"/>
                            <img src={Instagram} alt="" className="footer_icons"/>
                        </div>
                    </div>
                    <Navbar className="footer_navbar">
                        <NavDropdown title="Quem somos" show={true}  className="nav_texts">
                            <NavDropdown.Item href="#action/1.1" className="nav_item">Sobre os hosts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2" className="nav_item">Quem já passou <br/> pelo podcast</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3" className="nav_item">O que dizem <br/> sobre Os Agilistas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Nosso Podcast" show={true} className="nav_texts">
                            <NavDropdown.Item href="#action/2.1" className="nav_item">Episódios</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2" className="nav_item">Nossas Playlists</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="insights ágeis" show={true} className="nav_texts">
                            <NavDropdown.Item href="#action/3.1" className="nav_item">Coluna ágil</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink href="#home" className="nav_texts"><b>Os Agilistas indicam<br/> Nossa Comunidade</b></NavLink>
                    </Navbar>
                </div>
                <div className="footer_final">
                    <p>os agilistas 2024 @ todos os direitos reservados. <br/> <b>Política de Privacidade.</b></p>
                    <p>Powered by <b>dti</b></p>
                </div>
            </div>
        </footer>

        </>
    )
}