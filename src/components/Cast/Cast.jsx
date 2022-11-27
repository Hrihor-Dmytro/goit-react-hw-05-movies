import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as API from '../Services/Api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isCastLoading, setIsCastLoading] = useState(false);
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const castInfo = async movieId => {
      try {
        const response = await API.getMovieByCredits(movieId);
        setCast(response);
        setIsCastLoading(true);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    castInfo(movieId);
  }, [movieId]);

  if (cast.length === 0 && isCastLoading) {
    return <div>We don't have any cast information on this movie.</div>;
  }

  return (
    <ul>
      {cast.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `${baseURL}${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`
              }
              alt=""
              width="180"
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Cast.propTypes = {
  castInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
