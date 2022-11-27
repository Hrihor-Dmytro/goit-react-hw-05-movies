// import { HomeRernder } from 'components/HomeRender/HomeRender';
import { Outlet } from 'react-router-dom';
import { NavigationLink, Link, HederBox } from './Home.styled';
export const HomeBar = () => {
  return (
    <HederBox>
      <NavigationLink>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
        <Outlet />
      </NavigationLink>
    </HederBox>
  );
};
