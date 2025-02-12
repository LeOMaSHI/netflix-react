import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { comments, setComments } = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/i=${movieId}&apikey=ab744517`)
      .then((response) => response.json())
      .then((data) => setMovie(data));

    fetch(`http://localhost:3001/comments/${movieId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  //NON FUNZIONA!!! (ID su URL, PURE SU API, NON NEL DOM (??) )

  return (
    <div className="container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
      <p>{movie.Plot}</p>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
};

export default MovieDetails;
