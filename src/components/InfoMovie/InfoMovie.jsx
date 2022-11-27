export const InfoMovie = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;

  const baseURL = 'https://image.tmdb.org/t/p/w300';

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScor = () => Math.round(`${vote_average}` * 10);

  return (
    <div>
      <img
        src={
          poster_path
            ? `${baseURL}${poster_path}`
            : 'Sorry, i can not found... '
        }
        alt={original_title}
        width="300"
      />
      <div>
        <h2>
          {original_title} ({getYear()})
        </h2>
        <p>User Score : {getScor()}%</p>
        <h3>Overview </h3>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};
