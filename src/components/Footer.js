import '../App.css'
import '../index.css'

export default function Footer(){
    return(
        <footer className='footer-container grid black-background'>
            <a className='footer-a-logo' href='#'><object className='footerSVG' data="./images/footer-logo.svg" alt="logo"></object></a>
            <div id="footer-left-column">
                <nav className='footer-nav'>
                    <ul>
                        <li>Kabul, Afghanistan</li>
                        <li>Tel: +93 78989898989</li>
                        <li>Email: info@drdta.com</li>
                    </ul>
                </nav>
               
            </div>
            
            <div id="footer-middle-column">
                <nav className='footer-nav'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div id="footer-right-column">
                <nav className='footer-nav'>
                    <ul>
                        <li><a href="#service">Our Services</a></li>
                        {/* <li><a href="#contact">Projects</a></li> */}
                    </ul>
                </nav>
            
            </div>
        </footer>
    )
}