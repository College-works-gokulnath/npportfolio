import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <NavBar/>
   <Routes>
    <Route path='/' element={<Main/>}/>
    {/* <Route path='about' element={<h1>About</h1>}/> */}
   </Routes>


    </div>
  );
}

export default App;
