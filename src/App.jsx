import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <h1>This is Routing page</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default App;
