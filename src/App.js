import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import GoogleScholar from "./components/Gs/GoogleScholar";
import Articles from "./components/Gs/Articles";
import CoAuthors from "./components/Gs/CoAuthors";
import FullWidthTabs from "./components/publication/Publications";
import countapi from 'countapi-js';
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [views, setViews] = useState(localStorage.getItem("value"));
  useEffect(() => {
    console.log(views)
    setViews(views);
  }, []);
  
  // useLayoutEffect(()=>{
  //   countapi.visits('stalwart-figolla-f5cfc6.netlify.app').then((result) => {
  //     console.log(result.value);
  //     setviews(result.value)
  //   });
  // },[])


  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Main views={views}/>} />
          <Route path="/gs" element={<GoogleScholar />} />
          <Route path="gs/Articles" element={<Articles/>} />
          <Route path="gs/co_authors" element={<CoAuthors/>}/>
          <Route path='publications' element={<FullWidthTabs/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
