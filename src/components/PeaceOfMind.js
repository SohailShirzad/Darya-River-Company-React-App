import '../App.css'
import '../index.css'

export default function PeaceOfMind(){
    return(
        <div className='flex peace-of-mind-container'>
            <div className='peace-of-mind-left-section'>
                <img className='peace-of-mind-image' src="../images/peaceofmind.png" alt="Darya River's director standing in front of a room and explaining the strategy to two of the employees who are sitting down on sofa" />
            </div>
            <div className='flex column-direction space-between black-background peace-of-mind-right-section'>
                <p className='white-text outfit bold' id='for-peace-of-mind-title'>For peace of mind</p>
                <h2 className='white-text outfit bold' id='for-peace-of-mind-bottom-title'>Talk to Darya River's experts today</h2>
                
            </div>

        </div>
    )
}