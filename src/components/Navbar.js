import { useRef, useState } from 'react';
import { motion as m, useScroll, Variant} from "framer-motion"
import '../App.css';
export default function Navbar(){

    const navRef = useRef();
const navBtn = useRef();
const contact = "Get in touch";

 // for animation
 const itemVariants={
    open:{
        opacity: 1,
        y: 0,
        transition:{type: "spring", stiffness: 300, damping:24}
    },
    closed:{
        opacity: 0,
        y:20,
        transition:{duration:0.2}
    },
};
const { scrollYProgress } = useScroll();
const [isOpen, setIsOpen] = useState(false);

    function openNav() {
        console.log(navBtn.current);
        navBtn.current.classList.toggle("nav-btn-active")
        navRef.current.classList.toggle('active');
        document.body.classList.toggle('scroll-disabled');
        
      }
    return(
        <section className='display-animate'>
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
                <m.nav animate={isOpen ? "open" : "closed"}className="flex headerNav">
                    <div className='nav-width-60'>
                    <a id="header-nav-a-svg" href='#'><object className='headerSVG' data="./images/logo svg.svg" alt="logo"></object></a>
                    <m.a class='nav-btn' id='navbar-toggle' onClick={() => {setIsOpen(!isOpen); openNav();}} ref={navBtn}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </m.a>
                    </div>
                    <m.div 
                    initial={true} animate={isOpen ? "open" : "closed"}
                    variants ={{
                        open:{
                            opacity: 1,
                            transition:{
                                type: "spring",
                                bounce: 0,
                                duration: 0.5,
                                delayChildren: 0.5,
                                staggerChildren: 0.3
                            }
                        },
                        closed:{
                            opacity: 0,
                            transition:{
                                type: "spring",
                                bounce: 1,
                                duration: 0.2,
                            }
                        }
                    }} 
                    className='nav-width-40' ref={navRef}
                    // style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    > 
                    
                    <m.ul 
                    initial={false} animate={isOpen ? "open" : "closed"}
                    variants ={{
                        open:{
                            opacity: 1,
                            transition:{
                                type: "spring",
                                bounce: 0,
                                duration: 0.5,
                                delayChildren: 0.5,
                                staggerChildren: 0.3
                            }
                        },
                        closed:{
                            opacity: 0,
                            transition:{
                                type: "spring",
                                bounce: 1,
                                duration: 5,
                            },
                            
                        }
                    }} 
                    className='flex nav-links no-bullets'
                    // style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
      
                        <m.li className='nav-li' variants={itemVariants}><a className='no-underline bold' href="#">Home</a></m.li>
                        <m.li  className='nav-li' variants={itemVariants}><a className='no-underline bold' href="#">About us</a></m.li>
                        <m.li className='nav-li'  variants={itemVariants}><a className='no-underline bold' href="#">Contact</a></m.li>
                        <m.li className='nav-li'  variants={itemVariants}><a className='no-underline bold' href="#">Services</a></m.li>
                    </m.ul>

                    </m.div>
                </m.nav>
                <div className='get-in-touch relative white-text'><a className='get-in-touchbtn white-text'>{contact}</a></div>
            </header>
           

        </section>
    )
}