import { useEffect, useState } from "react";

const Cards = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = `http://www.omdbapi.com/?s=batman&apikey=ab744517`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          const firstThreeMovies = data.Search.slice(0, 6);
          setMovies(firstThreeMovies);
        } else {
          console.error("No movies found:", data.Error);
          setMovies([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [title]);

  return (
    <>
      <h4 style={{ color: "white" }}>{title}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.map((movie, index) => (
          <div className="col mb-2 text-center px-1" key={index}>
            <img
              className="img-fluid"
              src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
              alt={movie.Title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
