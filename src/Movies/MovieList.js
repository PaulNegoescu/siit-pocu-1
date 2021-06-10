import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

export function MovieList() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch('https://movies-app-siit.herokuapp.com/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <main>
      <h1>Our Movies</h1>
      {movies &&
        movies.map((movie) => <MovieCard data={movie} key={movie._id} />)}
    </main>
  );
}
