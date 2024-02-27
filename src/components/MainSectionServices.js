import '../App.css';
import Reveal from './Reveal';

export default function MainSectionServices(props){
    return(
        
        <section id="services" className='main-section-services-childs'>
            {props.div}
            <Reveal><h2 className='bold outfit' id='main-section-services-h2'>{props.title}</h2></Reveal>
            <Reveal><p className='outfit light-gray-text' id='main-section-services-p'>{props.description}</p></Reveal>
        </section>
    )
}