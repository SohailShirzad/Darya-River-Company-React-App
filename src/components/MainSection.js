import { motion as m, useScroll } from "framer-motion"
import '../App.css'


export default function MainSection(){
    // for animation
    const variants ={
        visible:{opacity: 1},
        hidden:{opacity: 0},
    }
    return(
        <m.section initial="hidden"
        whileInView="visible"
         className='grid main-section-text-container'
            
        />
    )
}