import '../App.css'
import '../index.css'
import Reveal from './Reveal';

export default function GetInTouch(){
    return(
        <section className='get-in-touch-container veryLightCream-background flex column-direction justify-center align-center'>
            <Reveal><h2 className='outfit bold light-gray-text' id='get-in-touch-h2'>What are you waiting for?</h2></Reveal>
            <Reveal><p className='outfit bolder black-text' id='get-in-touch-paragraph'>Get in touch now</p></Reveal>
        </section>
    )
}