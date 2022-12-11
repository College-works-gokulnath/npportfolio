import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import GoogleScholar from "./components/Gs/GoogleScholar";
import Articles from "./components/Gs/Articles";
import CoAuthors from "./components/Gs/CoAuthors";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gs" element={<GoogleScholar />} />
          <Route path="gs/Articles" element={<Articles/>} />
          <Route path="gs/co_authors" element={<CoAuthors/>}/>
          {/* <Route path='about' element={<h1>About</h1>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
