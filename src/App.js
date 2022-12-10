import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar/>
   <Routes>
    <Route path='/' element={<h1>home</h1>}/>
    <Route path='about' element={<h1>About</h1>}/>
   </Routes>


    </div>
  );
}

export default App;
