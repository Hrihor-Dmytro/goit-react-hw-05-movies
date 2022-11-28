import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from '../Services/Api';
import { useState, useEffect, Suspense } from 'react';
import { LinkBtn, AddInfoItemLink } from './MovieDetails.styled';
import { InfoMovie } from '../InfoMovie/InfoMovie';
import { HiArrowLeft } from 'react-icons/hi';

export const MovieDetails = id => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const uplaodMovieById = async movieId => {
      try {
        const response = await API.getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    uplaodMovieById(movieId);
  }, [movieId]);

  const from = location.state?.from ?? '/';

  return (
    <>
      {movie && (
        <section>
          <LinkBtn to={from}>
            <HiArrowLeft size="24" />
            back to...
          </LinkBtn>
          <InfoMovie info={movie}></InfoMovie>
          <div>
            <p>Additional information</p>
            <div>
              <ul>
                <li>
                  <AddInfoItemLink to="cast" state={{ from }}>
                    Cast
                  </AddInfoItemLink>
                </li>
                <li>
                  <AddInfoItemLink to="reviews" state={{ from }}>
                    Reviews
                  </AddInfoItemLink>
                </li>
              </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      )}
    </>
  );
};
