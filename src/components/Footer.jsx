import "./Footer.css";

import Spotify from '../assets/icons/socialmedias/Spotify-icon.svg';
import Instagram from '../assets/icons/socialmedias/Instagram-icon.png';
import Linkedin from '../assets/icons/socialmedias/Linkedin-icon.png';


export default function Footer(){
    return(
        <>
            <footer class="footer">
                <div class="footer_content">
                    <div class="footer_column">
                        <h3>Fale com a gente</h3>
                        <p>osagilistas@dti.digital.com.br</p>
                        <div class="social_icons">
                            <a href="#"><img src={Spotify} alt="Spotify" className="footer_icon"/></a>
                            <a href="#"><img src={Instagram} alt="Instagram" className="footer_icon"/></a>
                            <a href="#"><img src={Linkedin} alt="LinkedIn" className="footer_icon"/></a>
                        </div>
                    </div>
                    <div class="footer_column">
                        <h3 className="footer_subtitles">Quem somos</h3>
                        <ul>
                            <li><a href="#">Sobre os hosts</a></li>
                            <li><a href="#">Quem já passou pelo podcast</a></li>
                            <li><a href="#">O que dizem sobre Os Agilistas</a></li>
                        </ul>
                    </div>
                    <div class="footer_column">
                        <h3 className="footer_subtitles">Nosso Podcast</h3>
                        <ul>
                            <li><a href="#">Episódios</a></li>
                            <li><a href="#">Nossas Playlist</a></li>
                        </ul>
                    </div>
                    <div class="footer_column">
                        <h3 className="footer_subtitles">Insights ágeis</h3>
                        <ul>
                            <li><a href="#">Coluna ágil</a></li>
                        </ul>
                    </div>
                    <div class="footer_column">
                        <h3 className="footer_subtitles">Os Agilistas indicam</h3>
                        <ul>
                            <li><a href="#" className="footer_subtitles">Nossa Comunidade</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_bottom">
                    <p>os agilistas 2024 @ todos os direitos reservados. <a href="#" className="footer_subtitles">Política de Privacidade.</a></p>
                    <p class="powered_by">powered by <a href="#">dti</a></p>
                </div>
            </footer>
        </>
    )
}