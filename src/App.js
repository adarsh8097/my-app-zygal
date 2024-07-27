import { Router,Route,Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Carousel from './Route/slider';
import Post from './Route/Post';
// import './App.css';

function App() {
  return (
    <div className="App">
 
        <Routes>
          <Route path='/' element={<Carousel/>} />
          <Route path='/post' element={<Post/>}/>
        </Routes>
   
    </div>
  );
}

export default App;
