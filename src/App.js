import Navbar from "./components/Navbar";
import StationSearch from "./pages/StationSearch";
import { Route, Routes } from "react-router";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/search" element={<StationSearch/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

