import { useRef } from 'react';
import { motion as m, useScroll} from "framer-motion"
import '../App.css';
export default function Navbar(){
    const navRef = useRef();
    const navBtn = useRef();
    const contact = "Get in touch";

    // for animation
    const variants ={
        visible:{opacity: 1},
        hidden:{opacity: 0},
    }
    const { scrollYProgress } = useScroll();

   

    function openNav() {
        console.log(navBtn.current);
        navBtn.current.classList.toggle("nav-btn-active")
        navRef.current.classList.toggle('active');
        document.body.classList.toggle('scroll-disabled');
        
      }
    return(
        <section  className='display-animate'>
            <m.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
            <m.div animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} className="rectangle" />
            <header className="header">
                <nav className="flex headerNav">
                    <div className='nav-width-60'>
                    <a id="header-nav-a-svg" href='#'><object className='headerSVG' data="./images/logo svg.svg" alt="logo"></object></a>
                    </div>
                    <a class='nav-btn' id='navbar-toggle' onClick={openNav} ref={navBtn}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a>
                    <div className='nav-width-40' ref={navRef}>
                    <ul className='flex nav-links no-bullets'>
                        <li><a className='no-underline bold' href="#">Home</a></li>
                        <li><a className='no-underline bold' href="#">About us</a></li>
                        <li><a className='no-underline bold' href="#">Contact</a></li>
                        <li><a className='no-underline bold' href="#">Services</a></li>
                    </ul>

                    </div>
                </nav>
                <div className='get-in-touch relative white-text'>{contact}</div>
            </header>
           

        </section>
    )
}