import '../App.css';

export default function MainSectionServices(props){
    return(
        
        <section className='main-section-services-childs'>
            {props.div}
            <h2 className='bold outfit' id='main-section-services-h2'>{props.title}</h2>
            <p className='outfit light-gray-text' id='main-section-services-p'>{props.description}</p>
        </section>
    )
}