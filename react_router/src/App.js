import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Images from './Images';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* by using exact we can say that if the route matches the given path only then render the given component */}
        <Route exact path='/' Component={Home}/>
        <Route exact path='/images' Component={Images}/>
      </Routes>
    </div>
  );
}

export default App;
