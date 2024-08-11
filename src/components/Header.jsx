import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';

import Logo from '../assets/icons/Logo.svg';

export default function Header() {
    return (
        <>
        <header>
            <Navbar className='nav' expand="lg">
                <Container fluid className='nav_container'>
                    <Navbar.Brand href="#home"><img src={Logo} alt="Logo" className='nav_logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-example" />
                    <Navbar.Collapse id="navbar-example">
                    <Nav className='nav_lists'>
                        <NavDropdown
                        id="nav"
                        title="Nosso Podcast"
                        menuVariant="white"
                        >
                        <NavDropdown.Item href="#action/1.1">Episódios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.2">Nossas Playlists</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.3">Media Kit</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                        id="nav"
                        title="Insights ágeis"
                        menuVariant="white"
                        >
                        <NavDropdown.Item href="#action/2.1">Transformação e Eficiência Digital em 2024</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.2">Coluna ágil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.3">Como dar o primeiro passo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.4">Como ser uma liderança transcendental?</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.5">Você tem alimentado os tigres de sua empresa?</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink href="#home">Os Agilistas indicam</NavLink>
                        <NavLink href="#home">Nossa comunidade</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        </>
    );
}
