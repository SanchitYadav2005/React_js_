import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' Component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
