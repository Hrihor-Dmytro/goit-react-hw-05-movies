import { useState, useEffect } from 'react';
import * as API from '../Services/Api';

export const HomeRernder = () => {
  const [films, setFilms] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const renderTopFilms = async () => {
      try {
        const response = await API.getMorePopularMovie();
        setFilms(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    renderTopFilms();
  }, []);
  return (
    <div>
      <div>Trending today</div>
      <div>
        {films.map(({ title, id, poster_path }) => {
          return (
            <div key={id}>
              <img src={baseURL + poster_path} alt="Poster " />
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
