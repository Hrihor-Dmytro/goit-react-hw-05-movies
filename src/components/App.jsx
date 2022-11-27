import { Routes, Route } from 'react-router-dom';
import { HomeRernder } from './HomeRender/HomeRender';
import { HomeBar } from './Pages/Home';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBar />}>
          <Route path="/" element={<HomeRernder />} />
          <Route path="movies" element={<div> movies </div>} />
        </Route>
      </Routes>
    </div>
  );
};
