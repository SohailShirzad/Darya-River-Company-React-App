import '../App.css'
import '../index.css'
// import photo from '../public/images/profilePhotoTemp.jpg'

export default function OurTeam(props){
    return(
            <div className="our-team-cards flex column-direction align-center justify-center">
                <div className="our-team-image-wrapper">
                    <img className='our-team-image' src={props.img} alt="profile photo" />
                </div>
                <p className='our-team-name-text bold outfit'>{props.name}</p>
                <p className="our-team-position-text red-text bold">{props.title}</p>
                <div className="our-team-social-icons flex align-bottom">
                    <a className='our-team-a-icons' href={props.email}>
                        <object className='our-team-icons' data="./images/phone-solid.svg" alt="logo"></object>
                    </a>
                    <a href={props.tel}><object className='our-team-icons' data="./images/envelope-solid.svg" alt="logo"></object></a>
                </div>
            </div>
        
    )
}