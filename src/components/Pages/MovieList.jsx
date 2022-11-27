import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieList.styled';
export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ title, id }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </li>
        );
      })}
    </ul>
  );
};
