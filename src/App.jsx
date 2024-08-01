import React from "react";
import "./index.css";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Cards from "./assets/components/Cards/Cards";
import Course from "./assets/components/CourseName/Course";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Cards />
        <Course />
      </div>
    </>
  );
}

export default App;
