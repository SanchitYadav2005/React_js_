import Fruit from './Fruits';
import Foodsearch from './Foodsearch';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route 
          exact 
          path='/food/:name'
          element={<Fruit/>}
        />
        <Route
          exact 
          path='/'
          element={<Foodsearch/>}
        />
      </Routes>
    </div>
  );
}

export default App;
