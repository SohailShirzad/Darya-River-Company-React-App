import '../App.css';
import '../index.css';

export default function FlexibleServices(){
    return(
        <section className='flex flexible-services-section'>
            <div className="flexible-services-black black-background flex column-direction space-between">
                <h2 className='white-text' id='flexible-services-h2'>Flexible Services</h2>
                <p className='flexible-services-bottom-headings white-text'>Humanitarian</p>
            </div>
            <div className="flexible-services-image flex align-bottom">
                <p className='flexible-services-bottom-headings white-text'>Commercial</p>
            </div>
            <div className="flexible-services-red red-background flex align-bottom">
                <p className='flexible-services-bottom-headings white-text'>Government</p>
            </div>
        </section>
    )
}