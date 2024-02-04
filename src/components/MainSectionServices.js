import '../App.css';

export default function MainSectionServices(props){
    return(
        
        <div className='main-section-services-childs'>
            {props.div}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}