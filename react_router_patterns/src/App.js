import Fruit from './Fruits';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route 
          exact 
          path='/fruit/:name'
          element={<Fruit/>}
        />
      </Routes>
    </div>
  );
}

export default App;
