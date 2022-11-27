import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FlexBox,
  FlexList,
  TrendHeder,
  SectionBox,
  StyledLink,
} from './HomeRender.styled';
import * as API from '../Services/Api';

export const HomeRernder = () => {
  const [films, setFilms] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();

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
    <SectionBox>
      <TrendHeder>Trending today</TrendHeder>
      <FlexBox>
        {films.map(({ title, id, poster_path }) => {
          return (
            <FlexList key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <img src={baseURL + poster_path} alt="Poster" />
                <p>{title}</p>
              </StyledLink>
            </FlexList>
          );
        })}
      </FlexBox>
    </SectionBox>
  );
};
