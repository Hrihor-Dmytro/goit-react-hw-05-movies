import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeRernder } from './HomeRender/HomeRender';
import { HomeBar } from './Pages/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Pages/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBar />}>
          <Route path="/" element={<HomeRernder />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
