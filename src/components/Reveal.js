import React from "react";
import { useRef , useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import '../reveal.css'


export default function Reveal({children}){
    const ref = useRef();
    const isInView = useInView(ref, {amount:"some",once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible")
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{position: "relative", overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial = "hidden"
                animate = {mainControls}
                transition={{duration: 0.3, delay: 0.5}}
            >
            {children}
            </motion.div>

            <motion.div
            variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"},
                }}
                initial = "hidden"
                animate = {slideControls}
                transition={{duration: 0.5, ease: "easeIn"}}
                className="reveal-background"
            / >
            
        </div>
    );
};
