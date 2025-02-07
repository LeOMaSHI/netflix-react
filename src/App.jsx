import "./App.css";
import Navbar from "./components/navbar";
import TopBar from "./components/topbar";
import Cards from "./components/cards";

function App() {
  const movieImages = ["#.png", "#.png", "#.png"];
  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="container-fluid bg">
        <Cards title="Batman" images={movieImages} />
        <Cards title="Spiderman" images={movieImages} />
        <Cards title="Superman" images={movieImages} />
      </div>
    </div>
  );
}

export default App;
