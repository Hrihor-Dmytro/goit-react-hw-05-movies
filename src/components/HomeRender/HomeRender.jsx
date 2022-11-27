import { useState, useEffect } from 'react';
import { FlexBox, FlexList, TrendHeder } from './HomeRender.styled';
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
      <TrendHeder>Trending today</TrendHeder>
      <FlexBox>
        {films.map(({ title, id, poster_path }) => {
          return (
            <FlexList key={id}>
              <img src={baseURL + poster_path} alt="Poster " />
              <p>{title}</p>
            </FlexList>
          );
        })}
      </FlexBox>
    </div>
  );
};
