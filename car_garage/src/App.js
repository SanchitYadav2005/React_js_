import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Thar from './Thar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/Thar' render={() => <Thar />} />
      </Routes>
    </div>
  );
}

export default App;
