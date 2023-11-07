import React from "react"
import './index.css';
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Second from "./components/Second"
import Secondhalf from "./components/Secondhalf";
import Three from "./components/Three";
import Contact from "./components/Contact";

function App() {
  return (
    
    <>
    <div class="back-side">
    <div className="container">
      <Header/>
      <Jumbotron/>
      <Card/>
      <Second/>
     <Secondhalf/>
     <Three/>
     <Contact/>
     </div></div></>
  );
}

export default App;
