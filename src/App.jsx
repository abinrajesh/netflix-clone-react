import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import MainContent from "./Components/MainContent/MainContent";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <MainContent/>
    </div>
  );
}

export default App;
