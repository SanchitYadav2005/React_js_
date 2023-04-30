import Fruit from './Fruits';
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';

function App() {
  let {name} = useParams();
  return (
    <div className="App">
      <Routes>
        <Route 
          exact 
          path='/fruit/:name'
          element={<Fruit fruit={name}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
