import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
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
        <h1>{title} App Component</h1>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
