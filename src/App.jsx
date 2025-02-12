import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TopBar from "./components/topbar";
import Cards from "./components/cards";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="container-fluid bg">
        <Cards title="Batman" />
        <Cards title="Spiderman" />
        <Cards title="Superman" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
