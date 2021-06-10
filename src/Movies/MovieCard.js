export function MovieCard({ data }) {
  // const movie = props.movie;
  // const { movie } = props;
  return (
    <article className="card">
      <img src={data.Poster} alt={`Poster for ${data.Title}`} />
      <h4>{data.Title}</h4>
    </article>
  );
}
