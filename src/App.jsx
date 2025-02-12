import "./App.css";
import Navbar from "./components/navbar";
import TopBar from "./components/topbar";
import Cards from "./components/cards";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/tvshows";
import MovieDetails from "./components/moviedetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <TopBar />
        <div className="container-fluid bg">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Cards title="Batman" />
                  <Cards title="Spiderman" />
                  <Cards title="Superman" />
                </>
              }
            />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
