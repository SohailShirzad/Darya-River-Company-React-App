import React from "react";
import Navbar from '../components/Navbar';
import About from "../components/About";
import MainSection from '../components/MainSection';
import MainSectionServices from '../components/MainSectionServices';
import FlexibleServiecs from '../components/FlexibleServices';
import OurTeam from '../components/OurTeam';
import PeaceOfMind from '../components/PeaceOfMind'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';

export default function Home(){

    return(
        <div>
          <div className="content">
        <Reveal><Navbar /></Reveal>
          <Reveal><About /></Reveal>
          <MainSection />
          <div className="our-service-title-div">
            <h1 className="our-services-h1">Our Services</h1>
          </div>
          <div className='grid main-section-services-div-container'>
            <MainSectionServices
              div = <div id='1' className='line-div'></div>
              title = "Checking Vehicle"
              description = "Our highly trained dogs inspect vehicles meticulously in order to detect potential threats and hazards, ensuring that our clients are always safe and secure." 
            />
            <MainSectionServices
              div = <div id='2' className='line-div'></div>
              title = "Daily training of dogs "
              description = "We prioritize the safety and effectiveness of our K9 security teams with daily training sessions for both dogs and handlers, focusing on detecting explosive materials in open fields, bags, and buildings. The skills our teams acquire in real-world environments ensure the utmost security for our clients." 
            />
            <MainSectionServices
              div = <div id='3' className='line-div'></div>
              title = "Safety and Security"
              description = "Having a safe environment for your business, property and service users is our top priority at Darya River." 
            />
            <MainSectionServices
              div = <div id='4' className='line-div'></div>
              title = "Checking bags and other items"
              description = "Our security dogs thoroughly inspect bags and other items to ensure that our clients' safety is ensured. With their exceptional training and acute senses, the dogs detect any potential threats. 

" 
            />
          </div>
          <Reveal><FlexibleServiecs /></Reveal>
          <h2 id='our-team-heading'>Our Team</h2>
          <div className='flex our-team-container'>
            <OurTeam
              img = '/images/RS.png' 
              name = "Rahmatullah Shirzaei"
              title = "Director"
              email = "mailto:info@daryariver.com"
              tel = "tel:0093784640860"
            />
            <OurTeam
              img = '/images/IS.png' 
              name = "Isa Shirzaei"
              title = "Business Manager"
              email = "mailto:info@daryariver.com"
              tel = "tel:00447961977725"
            />
          </div>      
          <Reveal><PeaceOfMind /></Reveal> 
          {/* <PeaceOfMind /> */}
          <GetInTouch />
          <Reveal><Contact /></Reveal>
          <Reveal><Footer /></Reveal>
        </div>
        </div>
    )
}