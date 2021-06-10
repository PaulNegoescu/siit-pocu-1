import { Counter } from './Counter/Counter';
import { MovieList } from './Movies/MovieList';

// named export
function App() {
  return (
    <>
      <h1>Hello from component!</h1>
      <Counter diff={5} />
      <MovieList />
    </>
  );
}

export { App };
