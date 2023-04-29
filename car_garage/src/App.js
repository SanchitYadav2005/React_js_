import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Thar from './Thar';
import Wrangler from './Wrangler';
import Defender from './Defender'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* in version 6 of react-router-dom Component is replaced by element */}
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/wrangler' element={<Wrangler/>} />
        <Route exact path='/thar' element={<Thar/>} />
        <Route exact path='/defender' element={<Defender/>} />
      </Routes>
    </div>
  );
}

export default App;
