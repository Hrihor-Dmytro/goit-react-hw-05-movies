import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HederBox = styled.section`
  display: fle;
`;

export const NavigationLink = styled.nav`
  display: block;

  font-size: 24px;
  font-weight: bold;
  margin: auto;
`;

export const Link = styled(NavLink)`
  margin: 0;
  padding: 0px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  font-weight: bol;
  font-size: 30px;
  &.active {
    color: white;
    background-color: #00a6ff;
  }
`;
