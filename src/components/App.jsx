import { Routes, Route } from 'react-router-dom';
import { HomeBar } from './Pages/Home';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBar />} />
      </Routes>
    </div>
  );
};
