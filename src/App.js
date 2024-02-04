import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import MainSectionServices from './components/MainSectionServices';
import FlexibleServiecs from './components/FlexibleServices';
import OurTeam from './components/OurTeam';
import PeaceOfMind from './components/PeaceOfMind'
import GetInTouch from './components/GetInTouch'
import Footer from './components/GetInTouch'

function App() {
  const title = 'Welcome'
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <MainSection />
        <div className='grid main-section-services-div-container'>
          <MainSectionServices
            div = <div id='1' className='line-div'></div>
            title = "Checking Vehicle"
            description = "Descriptionshould be added here so we can meijislirdfierksierlskjr." 
          />
          <MainSectionServices
            div = <div id='2' className='line-div'></div>
            title = "Daily training of dogs "
            description = "Descriptionshould be added here so we can meijislirdfierksierlskjr." 
          />
          <MainSectionServices
            div = <div id='3' className='line-div'></div>
            title = "Checking Vehicle"
            description = "Dogs and handlers of Darya River Company are performed daily in the camp and practical work area every day. Open field. Bakes and buildings are executed in different and professional forms and methods." 
          />
          <MainSectionServices
            div = <div id='4' className='line-div'></div>
            title = "Checking bags and other items"
            description = "Descriptionshould be added here so we can meijislirdfierksierlskjr." 
          />
        </div>
        <FlexibleServiecs />
        <h2 id='our-team-heading'>Our Team</h2>
        <div className='flex our-team-container'>
          <OurTeam
            img = '/images/profilePhotoTemp.jpg' 
            name = "Sohail"
            title = "Software Engineer"
            email = "mailto: sohail_shirzad@hotmail.com"
            tel = "tel: 07961977725"
          />
          <OurTeam
            img = '/images/profilePhotoTemp.jpg' 
            name = "Rahmatullah Shirzaei"
            title = "CEO"
            email = "mailto: sohail_shirzad@hotmail.com"
            tel = "tel: 07961977725"
          />
          <OurTeam
            img = '/images/profilePhotoTemp.jpg' 
            name = "Isa Shirzaei"
            title = "Director"
            email = "mailto: sohail_shirzad@hotmail.com"
            tel = "tel: 07961977725"
          />
        </div>
       
        <PeaceOfMind />
        <GetInTouch />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
