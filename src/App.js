import './App.css';
import Pages from './pages/Pages';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Router>
          <Pages />
        </Router>
      </div>
  );
}

export default App;
