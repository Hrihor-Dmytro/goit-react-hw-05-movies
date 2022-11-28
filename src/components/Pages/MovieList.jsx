import { useLocation } from 'react-router-dom';
import { StyledLink, MowieBox, MowieList } from './MovieList.styled';
export const MovieList = ({ films }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  return (
    <MowieBox>
      {films.map(({ title, id, poster_path }) => {
        return (
          <MowieList key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img src={baseURL + poster_path} alt="Poster..." />
              <h2>{title}</h2>
            </StyledLink>
          </MowieList>
        );
      })}
    </MowieBox>
  );
};
