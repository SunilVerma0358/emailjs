// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MyContext from "./components/context/MyContext";
import OurProjext from "./components/OurProjext";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <MyContext>
      <Header />
      <OurProjext />
      <Roadmap />
    </MyContext>
  );
}

export default App;
